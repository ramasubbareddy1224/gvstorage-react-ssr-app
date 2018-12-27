// Express requirements
import path from 'path';
import fs from 'fs';

// React requirements
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';
import Loadable from 'react-loadable';

// Our store, entrypoint, and manifest
import createStore from '../src/store';
import App from '../src/app/app';
import manifest from '../build/asset-manifest.json';

// Some optional Redux functions related to user authentication
import { setCurrentUser, logoutUser } from '../src/modules/auth';

// LOADER
export default (req, res) => {
  /*
    A simple helper function to prepare the HTML markup. This loads:
      - Page title
      - SEO meta tags
      - Preloaded state (for Redux) depending on the current route
      - Code-split script tags depending on the current route
  */
  const injectHTML = (data, { html, title, meta, body, scripts, state }) => {
    data = data.replace('<html>', `<html ${html}>`);
    data = data.replace(/<title>.*?<\/title>/g, title);
    data = data.replace('</head>', `${meta}</head>`);
    data = data.replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
    );
    data = data.replace('</body>', scripts.join('') + '</body>');

    return data;
  };

  // Load in our HTML file from our build
  fs.readFile(
    path.resolve(__dirname, '../build/index.html'),
    'utf8',
    (err, htmlData) => {
      if (err) {
        console.error('Read error', err);

        return res.status(404).end();
      }

      // Create a store (with a memory history) from our current url
      const { store } = createStore(req.url);

      // If the user has a cookie (i.e. they're signed in) - set them as the current user
      // Otherwise, we want to set the current state to be logged out, just in case this isn't the default
      if ('mywebsite' in req.cookies) {
        store.dispatch(setCurrentUser(req.cookies.mywebsite));
      } else {
        store.dispatch(logoutUser());
      }

      const context = {};
      const modules = [];

      
      frontloadServerRender(() =>
        renderToString(
          <Loadable.Capture report={m => modules.push(m)}>
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <Frontload isServer={true}>
                  <App />
                </Frontload>
              </StaticRouter>
            </Provider>
          </Loadable.Capture>
        )
      ).then(routeMarkup => {
        if (context.url) {
          // If context has a url property, then we need to handle a redirection in Redux Router
          res.writeHead(302, {
            Location: context.url
          });

          res.end();
        } else {
          // Otherwise, we carry on...

          // Let's give ourself a function to load all our page-specific JS assets for code splitting
          const extractAssets = (assets, chunks) =>
            Object.keys(assets)
              .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
              .map(k => assets[k]);

          // Let's format those assets into pretty <script> tags
          const extraChunks = extractAssets(manifest, modules).map(
            c => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`
          );

          // We need to tell Helmet to compute the right meta tags, title, and such
          const helmet = Helmet.renderStatic();

          // NOTE: Disable if you desire
          // Let's output the title, just to see SSR is working as intended
          console.log('THE TITLE', helmet.title.toString());

          // Pass all this nonsense into our HTML formatting function above
          const html = injectHTML(htmlData, {
            html: helmet.htmlAttributes.toString(),
            title: helmet.title.toString(),
            meta: helmet.meta.toString(),
            body: routeMarkup,
            scripts: extraChunks,
            state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
          });

          // We have all the final HTML, let's send it to the user already!
          res.send(html);
        }
      });
    }
  );
};
