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

const RentPayment = Loadable({
  loader: () => import(/* webpackChunkName: "rent-payment" */ './rent-payment'),
  loading: () => null,
  modules: ['rent-payment']
});

const WhyChooseUs = Loadable({
  loader: () => import(/* webpackChunkName: "why-choose-us" */ './why-choose-us'),
  loading: () => null,
  modules: ['why-choose-us']
});

const AboutUs = Loadable({
  loader: () => import(/* webpackChunkName: "about-us" */ './about-us'),
  loading: () => null,
  modules: ['about-us']
});

const BusinessStorage = Loadable({
  loader: () => import(/* webpackChunkName: "business-storage" */ './business-storage'),
  loading: () => null,
  modules: ['business-storage']
});

const Careers = Loadable({
  loader: () => import(/* webpackChunkName: "careers" */ './careers'),
  loading: () => null,
  modules: ['careers']
});

const ContactUs = Loadable({
  loader: () => import(/* webpackChunkName: "contact-us" */ './contact-us'),
  loading: () => null,
  modules: ['contact-us']
});


const FAQs = Loadable({
  loader: () => import(/* webpackChunkName: "faqs" */ './faqs'),
  loading: () => null,
  modules: ['faqs']
});

const GVSServices = Loadable({
  loader: () => import(/* webpackChunkName: "gvs-services" */ './gvs-services'),
  loading: () => null,
  modules: ['gvs-services']
});

const PackingSupplies = Loadable({
  loader: () => import(/* webpackChunkName: "packing-supplies" */ './packing-supplies'),
  loading: () => null,
  modules: ['packing-supplies']
});

const PersonalStorage = Loadable({
  loader: () => import(/* webpackChunkName: "personal-storage" */ './personal-storage'),
  loading: () => null,
  modules: ['personal-storage']
});


const SizeGuide = Loadable({
  loader: () => import(/* webpackChunkName: "size-guide" */ './size-guide'),
  loading: () => null,
  modules: ['size-guide']
});


const SpaceCalculator = Loadable({
  loader: () => import(/* webpackChunkName: "space-calculator" */ './space-calculator'),
  loading: () => null,
  modules: ['space-calculator']
});


const Tips = Loadable({
  loader: () => import(/* webpackChunkName: "tips" */ './tips'),
  loading: () => null,
  modules: ['tips']
});


const VehicleStorage = Loadable({
  loader: () => import(/* webpackChunkName: "vehicle-storage" */ './vehicle-storage'),
  loading: () => null,
  modules: ['vehicle-storage']
});

 const StorageOptions = Loadable({
  loader: () => import(/* webpackChunkName: "storage-options" */ './storage-options'),
  loading: () => null,
  modules: ['storage-options']
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
    <Route exact path="/rent-payment/:locationCode/:unitId/:tenantId" component={RentPayment}/>

    <Route exact path="/storage-options" component={StorageOptions}/>
    <Route exact path="/why-choose-us" component={WhyChooseUs}/>
    <Route exact path="/about-us" component={AboutUs}/>
    <Route exact path="/business-storage" component={BusinessStorage}/>
    <Route exact path="/careers" component={Careers}/>
    <Route exact path="/contact-us" component={ContactUs}/>
    <Route exact path="/faqs" component={FAQs}/>
    <Route exact path="/gvs-services" component={GVSServices}/>
    <Route exact path="/packing-supplies" component={PackingSupplies}/>
    <Route exact path="/personal-storage" component={PersonalStorage}/>
    <Route exact path="/size-guide" component={SizeGuide}/>
    <Route exact path="/space-calculator" component={SpaceCalculator}/>
    <Route exact path="/tips" component={Tips}/>
    <Route exact path="/vehicle-storage" component={VehicleStorage}/>


    <Route component={NotFound} />
  </Switch>
);
