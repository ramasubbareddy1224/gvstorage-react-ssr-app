import React from 'react';
import Page from '../../components/page';

import logo from '../../assets/logo.jpg';
import HomeBanner from '../../components/common/home.banner';
import HomeLocations from '../../components/common/home.locations';
import HomeStorageSolutions from '../../components/common/home.storagesolutions';
import HomeWhyUs from '../../components/common/home.whyus';
import HomeTestimonials from '../../components/common/home.testimonials';
import CommonContactUs from '../../components/common/common.contactus';

export default () => (
  <Page id="homepage">
    <HomeBanner pageName="home"></HomeBanner>
    <main id="main">
    <HomeLocations></HomeLocations>
    <HomeStorageSolutions></HomeStorageSolutions>
    <HomeWhyUs></HomeWhyUs>
    <HomeStorageSolutions></HomeStorageSolutions>
    <HomeTestimonials></HomeTestimonials>
    <CommonContactUs></CommonContactUs>
    </main>
  </Page>
);
