import React from 'react';
import Page from '../../components/page';

export default () => (
  <Page
    id="not-found"
    title="Not Found"
    description="Page not found"
    noCrawl
  >
  {  document.getElementById('div-preloader').style.display = 'none'}
    <p>Page Not Found</p>
  </Page>
);
