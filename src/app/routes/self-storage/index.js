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
import { getAllUnitsByLocationCode,resetSelfStorageUnits } from '../../../modules/actioncreators/self-storage.actioncreator';


var pathParams = {};

const frontload = async props => {

  props.resetSelfStorageUnits();

  pathParams = props.match.params;

  try{
      // var dynamicRequestList = [];
      // if(props.allPinCodes_Sites.length == 0){
      //   dynamicRequestList.push(props.getPinCodes_Sites());
      // }
      // dynamicRequestList.push(props.getAllUnitsByLocationCode(props.match.params.locationCode));
      // await Promise.all(dynamicRequestList);
      await props.getAllUnitsByLocationCode(props.match.params.locationCode);
  }
  catch(error)
  {
    console.log('error',error);
  }


  
  // var dynamicRequestList = [];
  // if(props.allPinCodes_Sites.length == 0){
  //   dynamicRequestList.push(props.getPinCodes_Sites());
  // }
  // dynamicRequestList.push(props.getAllUnitsByLocationCode(props.match.params.locationCode));

  // return Promise.all(dynamicRequestList).then(function(values) {   
  // });
  


  // return Promise.all([
  //   props.getPinCodes_Sites() 
  //   ,props.getAllSitesByFilters(props.match.params.locationCode)
  //   ,props.getAllUnitsByLocationCode(props.match.params.locationCode) ]).then(function(values) {
  // });
};


class SelfStorage extends Component {  
  render() {
    const { allUnits } = this.props;
    return (
      <Page id="self-storage">
      {Object.keys(this.props.allUnits).length > 0 && <SelfStorageBanner allUnits={this.props.allUnits}></SelfStorageBanner>}
     
       <main id="main" className="facility-section "> 
           <SelfStorageFilteredData pathParams={pathParams} allUnits={this.props.allUnits} allSites={this.props.allSites} allPinCodes_Sites ={this.props.allPinCodes_Sites}></SelfStorageFilteredData>
           <SelfStorageFeatures></SelfStorageFeatures>
           <SelfStorageReviews></SelfStorageReviews>
           <SelfStorageWhatFits></SelfStorageWhatFits>
           <SearchRelevantData relevanceType="neighbourhood"></SearchRelevantData>
           <SelfStorageAboutSite></SelfStorageAboutSite>
           <SearchFilteredData allSites={this.props.allSites} allFilters={this.props.allFilters} allPinCodes_Sites ={this.props.allPinCodes_Sites}></SearchFilteredData>
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
  bindActionCreators({ getPinCodes_Sites, getAllSitesByFilters, getAllUnitsByLocationCode,resetSelfStorageUnits }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(SelfStorage)
);

