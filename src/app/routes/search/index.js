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
  props.resetAllSites();
  pathParams = props.match.params;
  //const queryParams = queryString.parse(window.location.search);
  //await props.getAllSitesByFilters(values.value);
  var dynamicRequestList = [];
  dynamicRequestList.push(props.getPinCodes_Sites());
  
  dynamicRequestList.push(props.getAllSitesByFilters(props.match.params.filter));
  document.getElementById('div-preloader').style.display = 'block';
  //await Promise.all(dynamicRequestList);
  return Promise.all(dynamicRequestList).then(function(values) {
    document.getElementById('div-preloader').style.display = 'none';
  });
};


class Search extends Component {  

  constructor(){
    super();
   
  }
  

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.filter !== this.props.match.params.filter) {
      pathParams.filter = nextProps.match.params.filter;
      document.getElementById('div-preloader').style.display = 'block';
      Promise.all([this.props.getAllSitesByFilters(nextProps.match.params.filter)]).then(function(values) {
        document.getElementById('div-preloader').style.display = 'none';
      });
    }

    return true;
  }

  render() {

    return (
      <Page id="search"
       title={`Self Storage Facilities with Great Value Storage in ${this.props.match.params.filter}`} 
       description={`Rent clean and cheap self storage units today with Great Value Storage located in ${this.props.match.params.filter}. We offer climate and non-climate control self storage units.`}>
      <HomeBanner pageName="search" allPinCodes_Sites ={this.props.allPinCodes_Sites} siteCount={!!this.props.allSites.siteLocations ?  this.props.allSites.siteLocations.length : 0} siteName={pathParams.filter}></HomeBanner>
      <CommonBreadCrumb allSites={this.props.allSites} allPinCodes_Sites ={this.props.allPinCodes_Sites}></CommonBreadCrumb>
      <main id="main" className="citypage-section"> 
        <div>
          <h2 className="nearBySites">Personal storage & Self storage locations in {pathParams.filter} </h2>
          <SearchFilteredData allSites={this.props.allSites} allFilters={this.props.allFilters}></SearchFilteredData>
        </div>
          <section id="about" className ="city-nearby-lake ">
         
          {!!this.props.allSites.siteLocations && this.props.allSites.siteLocations[0].content.gvsnearneighborhoods.length > 0 &&
             <div>
             <SearchRelevantData pageName="search" relevanceType="neighbourhood" content={this.props.allSites.siteLocations[0].content.gvsnearneighborhoods}></SearchRelevantData>
             <hr />
              </div>
        } 
        {!!this.props.allSites.siteLocations && !!this.props.allSites.siteLocations[0].content.gvsnearlakes.length > 0 &&
             <div>
             <SearchRelevantData pageName="search" relevanceType="nearbylakes" content={this.props.allSites.siteLocations[0].content.gvsnearlakes}></SearchRelevantData>
              <hr />
              </div>
        } 
        
        {!!this.props.allSites.siteLocations && !!this.props.allSites.siteLocations[0].content.gvsnearuniversities.length > 0 &&
             <div>
             <SearchRelevantData pageName="search" relevanceType="nearbyuniversities" content={this.props.allSites.siteLocations[0].content.gvsnearuniversities}></SearchRelevantData>    
             <hr />
             </div>
        } 
      
         
      {!!this.props.allSites.siteLocations && !!this.props.allSites.siteLocations[0].content.gvsnearzipcodes.length > 0 &&
             <div>
             <SearchRelevantData pageName="search" relevanceType="nearbyzipcodes" content={this.props.allSites.siteLocations[0].content.gvsnearzipcodes}></SearchRelevantData>    
             <hr />
             </div>
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
