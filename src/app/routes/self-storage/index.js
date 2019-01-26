import React, { Component } from 'react';
import Page from '../../components/page';

import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import {Redirect,Link} from 'react-router-dom';

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
      var dynamicRequestList = [];
      if(props.allPinCodes_Sites.length == 0){
        dynamicRequestList.push(props.getPinCodes_Sites());
      }
      dynamicRequestList.push(props.getAllUnitsByLocationCode(props.match.params.locationCode));
      document.getElementById('div-preloader').style.display = 'block';
      //await Promise.all(dynamicRequestList);
      return Promise.all(dynamicRequestList).then(function(values) {
        if(values[values.length -1].status.code < 0){
          props.history.push(`/`)
        }
        document.getElementById('div-preloader').style.display = 'none';
      });
    // return props.getAllUnitsByLocationCode(props.match.params.locationCode);
  }
  catch(error)
  {
    document.getElementById('div-preloader').style.display = 'none';
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
    const  selectedSiteLocation = this.props.allUnits.siteLocation || {};
    const {allSites} = this.props;

    var allSitesNearBy = {};  
    var siteLocations = !!allUnits && !!allUnits.siteLocation && allUnits.siteLocation.content && 
    allUnits.siteLocation.content.gvsnearsites.length > 0 && 
    allUnits.siteLocation.content.gvsnearsites.map(x=>x.siteLocation);
    
    allSitesNearBy.siteLocations = siteLocations;

    return (
      <Page id="self-storage">
      {Object.keys(this.props.allUnits).length > 0 && <SelfStorageBanner pathParams={pathParams} allUnits={this.props.allUnits}></SelfStorageBanner>}
     
       <main id="main" className="facility-section "> 
           <SelfStorageFilteredData pathParams={pathParams} allUnits={this.props.allUnits} allSites={this.props.allSites} allPinCodes_Sites ={this.props.allPinCodes_Sites}></SelfStorageFilteredData>
           <SelfStorageFeatures></SelfStorageFeatures>
           {/* <SelfStorageReviews></SelfStorageReviews> */}
           <SelfStorageWhatFits></SelfStorageWhatFits>
           {/* <SearchRelevantData relevanceType="neighbourhood"></SearchRelevantData> */}


 {!!selectedSiteLocation.content  && selectedSiteLocation.content.gvsnearneighborhoods.length > 0 &&
             <div>
             <SearchRelevantData pageName="self-storage" relevanceType="neighbourhood" content={selectedSiteLocation.content.gvsnearneighborhoods}></SearchRelevantData>
             <hr />
              </div>
        } 
        {!!selectedSiteLocation.content  && selectedSiteLocation.content.gvsnearlakes.length > 0 &&
             <div>
             <SearchRelevantData pageName="self-storage" relevanceType="nearbylakes" content={selectedSiteLocation.content.gvsnearlakes}></SearchRelevantData>
              <hr />
              </div>
        } 
        
        {!!selectedSiteLocation.content  && selectedSiteLocation.content.gvsnearuniversities.length > 0 &&
             <div>
             <SearchRelevantData pageName="self-storage" relevanceType="nearbyuniversities" content={selectedSiteLocation.content.gvsnearuniversities}></SearchRelevantData>    
             <hr />
             </div>
        } 
      
         
      {!!selectedSiteLocation.content  && selectedSiteLocation.content.gvsnearzipcodes.length > 0 &&
             <div>
             <SearchRelevantData pageName="self-storage" relevanceType="nearbyzipcodes" content={selectedSiteLocation.content.gvsnearzipcodes}></SearchRelevantData>    
             <hr />
             </div>
        } 



              
            { !!allUnits.siteLocation && allUnits.siteLocation.content &&
           <SelfStorageAboutSite content={allUnits.siteLocation.content}></SelfStorageAboutSite>
            }
           {!!allUnits.siteLocation && allUnits.siteLocation.content && allUnits.siteLocation.content.gvsnearsites.length > 0 &&
          
           <SearchFilteredData allSites={allSitesNearBy} allFilters={this.props.allFilters} allPinCodes_Sites ={this.props.allPinCodes_Sites}></SearchFilteredData>
           }
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

