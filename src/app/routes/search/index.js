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

import { getAllSitesByFilters } from '../../../modules/actioncreators/search.actioncreator';
import { getPinCodes_Sites
} from '../../../modules/actioncreators/home.actioncreator';


const frontload = async props => {
  //const queryParams = queryString.parse(window.location.search);
  //await props.getAllSitesByFilters(values.value);
    var dynamicRequestList = [];
  if(Object.keys(props.allPinCodes_Sites).length == 0){
    dynamicRequestList.push(props.getPinCodes_Sites());
  }

  dynamicRequestList.push(props.getAllSitesByFilters(props.match.params.filter));

  return Promise.all([dynamicRequestList]).then(function(values) {
   
  });
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
      <HomeBanner pageName="search" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
      <CommonBreadCrumb allSites={this.props.allSites} allPinCodes_Sites ={this.props.allPinCodes_Sites}></CommonBreadCrumb>
      <main id="main" className="citypage-section"> 
          <SearchFilteredData allSites={this.props.allSites} allFilters={this.props.allFilters}></SearchFilteredData>
        
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
  }
}

const mapStateToProps = state => ({
  allPinCodes_Sites: state.homePageData.pinCodes_Sites,
   allSites: state.searchPageData.sites,
   allFilters: state.commonData.filterInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPinCodes_Sites, getAllSitesByFilters }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Search)
);
