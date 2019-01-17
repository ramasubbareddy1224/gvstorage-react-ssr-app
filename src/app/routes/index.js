import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../components/authenticated-route';
import UnauthenticatedRoute from '../components/unauthenticated-route';
import Loadable from 'react-loadable';

import NotFound from './not-found';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './homepage'),
  loading: () => null,
  modules: ['homepage']
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './about'),
  loading: () => null,
  modules: ['about']
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ './dashboard'),
  loading: () => null,
  modules: ['dashboard']
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ './login'),
  loading: () => null,
  modules: ['login']
});

const Logout = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ './logout'),
  loading: () => null,
  modules: ['logout']
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './profile'),
  loading: () => null,
  modules: ['profile']
});

const Search = Loadable({
  loader: () => import(/* webpackChunkName: "search" */ './search'),
  loading: () => null,
  modules: ['search']
});

const SelfStorage = Loadable({
  loader: () => import(/* webpackChunkName: "self-storage" */ './self-storage'),
  loading: () => null,
  modules: ['self-storage']
});

const Reserve = Loadable({
  loader: () => import(/* webpackChunkName: "reserve" */ './reserve'),
  loading: () => null,
  modules: ['reserve']
});

const Rent = Loadable({
  loader: () => import(/* webpackChunkName: "rent" */ './rent'),
  loading: () => null,
  modules: ['rent']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/about" component={About} />

    <Route exact path="/profile/:id" component={Profile} />


    <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />

    <UnauthenticatedRoute exact path="/login" component={Login} />
    <AuthenticatedRoute exact path="/logout" component={Logout} />

    <Route exact path="/search/:filter" component={Search} />
    <Route exact path="/self-storage/:locationCode" component={SelfStorage}/>
    <Route exact path="/reserve/:locationCode/:unitId" component={Reserve}/>
    <Route exact path="/rent/:locationCode/:unitId" component={Rent}/>

    <Route component={NotFound} />
  </Switch>
);
