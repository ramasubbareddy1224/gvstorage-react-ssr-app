import Page from '../../components/page';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import HomeBanner from '../../components/common/home.banner';

import { getPinCodes_Sites, getCurrentLocation, getNearByLocations
} from '../../../modules/actioncreators/home.actioncreator';
import CommonStaticBreadCrumb from '../../components/common/common.static-breadcrumb';
import CommonSpaceCalculator from '../../components/common/common.space-calculator';
import CommonNearBy from '../../components/common/common.nearby';
import StorageOptionsStaticContent from '../../components/common/storage-options.static-content';

const frontload = async props =>{

  
    // getCurrentLocation().then((success) =>{
    
    //   if(!!success){
    //     props.getNearByLocations(success.region_code, success.city, success.zip).then(function(values) {
    //     // props.getNearByLocations('MA', 'Springfield', '99878').then(function(values) {
    //      });
    //    }
     
    //    }, (error)=>{
     
    //    });

    
  var dynamicRequestList = [];
  dynamicRequestList.push(props.getPinCodes_Sites());
  dynamicRequestList.push(props.getNearByLocations());
  
  document.getElementById('div-preloader').style.display = 'block';
  return Promise.all(dynamicRequestList).then(function(values) {
    document.getElementById('div-preloader').style.display = 'none';
  });
}

class StorageOptions extends Component {
    
  render() {
    const {nearByLocations} = this.props;
    return (
      <Page id="storage-options"
      title="Household, Business, &amp; Vehicle Storage Solutions | Great Value Storage"
      description="Need extra space? Learn more about affordable self storage options for homeowners, businesses, and nonprofits.">
      <HomeBanner pageName="Storage Options" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
      <CommonStaticBreadCrumb pageName="Personal Storage & Self Storage Units" routeName="Storage Options"></CommonStaticBreadCrumb>
      
      <main id="main">
        { !!nearByLocations.siteLocations && nearByLocations.siteLocations.length >0 &&
            <CommonNearBy nearByLocations={nearByLocations.siteLocations}></CommonNearBy>
        }
        <StorageOptionsStaticContent></StorageOptionsStaticContent>
      </main>
    </Page>
    );
  }
}

const mapStateToProps = state => ({
    allPinCodes_Sites: state.homePageData.pinCodes_Sites,
    nearByLocations: state.homePageData.nearByLocations
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({  getPinCodes_Sites, getNearByLocations }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(StorageOptions)
);

