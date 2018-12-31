import React from 'react';
import Page from '../../components/page';

import logo from '../../assets/logo.jpg';
import SelfStorageBanner from '../../components/common/self-storage.banner';
import SelfStorageFilteredData from '../../components/common/self-storage.filtereddata';
import SelfStorageFeatures from '../../components/common/self-storage.features';
import SelfStorageReviews from '../../components/common/self-storage.reviews';
import SelfStorageWhatFits from '../../components/common/self-storage.whatfits';
import SearchRelevantData from '../../components/common/search.relevantdata';
import SelfStorageAboutSite from '../../components/common/self-storage.aboutsite';
import SearchFilteredData from '../../components/common/search.filtereddata';
import CommonContactUs from '../../components/common/common.contactus';


export default () => (
  <Page id="self-storage">
   <SelfStorageBanner></SelfStorageBanner>
  
    <main id="main" className="facility-section "> 
        <SelfStorageFilteredData></SelfStorageFilteredData>
        <SelfStorageFeatures></SelfStorageFeatures>
        <SelfStorageReviews></SelfStorageReviews>
        <SelfStorageWhatFits></SelfStorageWhatFits>
        <SearchRelevantData relevanceType="neighbourhood"></SearchRelevantData>
        <SelfStorageAboutSite></SelfStorageAboutSite>
        <SearchFilteredData></SearchFilteredData>
        <CommonContactUs></CommonContactUs>
    </main>
  </Page>
);
