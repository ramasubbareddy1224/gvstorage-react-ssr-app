import React, { Component } from 'react';
import Page from '../../components/page';

import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import HomeBanner from '../../components/common/home.banner';
import CommonBreadCrumb from '../../components/common/common.breadcrumb';
import SearchFilteredData from '../../components/common/search.filtereddata';
import SearchRelevantData from '../../components/common/search.relevantdata';
import CommonContactUs from '../../components/common/common.contactus';
import EventsMapPage from '../../components/googlemap/events_map_page';

import { getAllSitesByFilters,resetAllSites } from '../../../modules/actioncreators/search.actioncreator';
import { getPinCodes_Sites
} from '../../../modules/actioncreators/home.actioncreator';


var pathParams = {};
const frontload = async props => {
  //props.resetAllSites();
  pathParams = props.match.params;
  //const queryParams = queryString.parse(window.location.search);
  //await props.getAllSitesByFilters(values.value);
  var dynamicRequestList = [];
  if(props.allPinCodes_Sites.length == 0){
    dynamicRequestList.push(props.getPinCodes_Sites());
  }
  dynamicRequestList.push(props.getAllSitesByFilters(props.match.params.filter));

  await Promise.all(dynamicRequestList);
};


class Search extends Component {  

  constructor(){
    super();
   
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.filter !== this.props.match.params.filter) {
      Promise.all([this.props.getAllSitesByFilters(nextProps.match.params.filter)]).then(function(values) {
      });
    }

    return true;
  }

  render() {

    return (
      <Page id="search">
      <HomeBanner pageName="search" allPinCodes_Sites ={this.props.allPinCodes_Sites} siteCount={!!this.props.allSites.siteLocations ?  this.props.allSites.siteLocations.length : 0} siteName={pathParams.filter}></HomeBanner>
      <CommonBreadCrumb allSites={this.props.allSites} allPinCodes_Sites ={this.props.allPinCodes_Sites}></CommonBreadCrumb>
      <main id="main" className="citypage-section"> 
          <SearchFilteredData allSites={this.props.allSites} allFilters={this.props.allFilters}></SearchFilteredData>
        
          <section id="about" className ="city-nearby-lake ">
         
          {!!this.props.allSites.siteLocations && this.props.allSites.siteLocations[0].content.gvsnearneighborhoods.length > 0 &&
              <SearchRelevantData relevanceType="neighbourhood" content={this.props.allSites.siteLocations[0].content.gvsnearneighborhoods}></SearchRelevantData>
              
        } 
        <hr />
        {!!this.props.allSites.siteLocations && !!this.props.allSites.siteLocations[0].content.gvsnearlakes.length > 0 &&
               <SearchRelevantData relevanceType="nearbylakes" content={this.props.allSites.siteLocations[0].content.gvsnearlakes}></SearchRelevantData>
              
        } 
        <hr />
        {!!this.props.allSites.siteLocations && !!this.props.allSites.siteLocations[0].content.gvsnearuniversities.length > 0 &&
              <SearchRelevantData relevanceType="nearbyuniversities" content={this.props.allSites.siteLocations[0].content.gvsnearuniversities}></SearchRelevantData>    
        } 
      
        
                
          </section>
  
              <CommonContactUs></CommonContactUs>
      </main>
    </Page>
    );
  }
}

const mapStateToProps = state => ({
  allPinCodes_Sites: state.homePageData.pinCodes_Sites,
   allSites: state.searchPageData.sites,
   allFilters: state.commonData.filterInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPinCodes_Sites, getAllSitesByFilters,resetAllSites }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Search)
);
