import React from 'react';
import Page from '../../components/page';

import logo from '../../assets/logo.jpg';
import HomeBanner from '../../components/common/home.banner';
import CommonBreadCrumb from '../../components/common/common.breadcrumb';
import SearchFilteredData from '../../components/common/search.filtereddata';
import SearchRelevantData from '../../components/common/search.relevantdata';
import CommonContactUs from '../../components/common/common.contactus';

export default () => (
  <Page id="search">
    <HomeBanner pageName="search"></HomeBanner>
    <CommonBreadCrumb></CommonBreadCrumb>
    <main id="main" className="citypage-section"> 
        <SearchFilteredData></SearchFilteredData>
        <section id="about" className ="city-nearby-lake ">
            <SearchRelevantData relevanceType="neighbourhood"></SearchRelevantData>
            <hr/>
             <SearchRelevantData relevanceType="nearbylakes"></SearchRelevantData>
             <hr/>
              <SearchRelevantData relevanceType="nearbyuniversities"></SearchRelevantData>
        </section>

            <CommonContactUs></CommonContactUs>
    </main>
  </Page>
);
