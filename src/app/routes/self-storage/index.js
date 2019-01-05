import React, { Component } from 'react';
import Page from '../../components/page';

import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

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


import { getAllSitesByFilters } from '../../../modules/actioncreators/search.actioncreator';
import { getPinCodes_Sites } from '../../../modules/actioncreators/home.actioncreator';
import { getAllUnitsByLocationCode } from '../../../modules/actioncreators/self-storage.actioncreator';


const frontload = async props => {
  debugger;
  //const queryParams = queryString.parse(window.location.search);
  //await props.getAllSitesByFilters(values.value);
  return Promise.all([
    props.getPinCodes_Sites() 
    ,props.getAllSitesByFilters(props.match.params.locationCode)
    ,props.getAllUnitsByLocationCode(props.match.params.locationCode) ]).then(function(values) {
  });
};


class SelfStorage extends Component {  
  render() {
    const { allUnits } = this.props;
    debugger;
    return (
      <Page id="self-storage">
      <SelfStorageBanner></SelfStorageBanner>
     
       <main id="main" className="facility-section "> 
           <SelfStorageFilteredData allUnits={this.props.allUnits}></SelfStorageFilteredData>
           <SelfStorageFeatures></SelfStorageFeatures>
           <SelfStorageReviews></SelfStorageReviews>
           <SelfStorageWhatFits></SelfStorageWhatFits>
           <SearchRelevantData relevanceType="neighbourhood"></SearchRelevantData>
           <SelfStorageAboutSite></SelfStorageAboutSite>
           <SearchFilteredData allSites={this.props.allSites} allFilters={this.props.allFilters}></SearchFilteredData>
           <CommonContactUs></CommonContactUs>
       </main>
     </Page>
    );
  }
}

const mapStateToProps = state => ({
  allPinCodes_Sites: state.homePageData.pinCodes_Sites,
   allSites: state.searchPageData.sites,
   allFilters: state.commonData.filterInfo,
   allUnits: state.selfStorageData.units
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPinCodes_Sites, getAllSitesByFilters, getAllUnitsByLocationCode }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(SelfStorage)
);

