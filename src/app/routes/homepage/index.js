import Page from '../../components/page';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import logo from '../../assets/logo.jpg';
import HomeBanner from '../../components/common/home.banner';
import HomeLocations from '../../components/common/home.locations';
import HomeStorageSolutions from '../../components/common/home.storagesolutions';
import HomeWhyUs from '../../components/common/home.whyus';
import HomeTestimonials from '../../components/common/home.testimonials';
import CommonContactUs from '../../components/common/common.contactus';


import { getPinCodes_Sites, getCurrentLocation, getNearByLocations
  } from '../../../modules/actioncreators/home.actioncreator';
import CommonNearBy from '../../components/common/common.nearby';
import HomeHowStorageWorks from '../../components/common/home.howstorageworks';
import HomeRightStorageSpace from '../../components/common/home.rightstoragespace';
import HomeStorageTools from '../../components/common/home.storagetools';

const frontload = async props =>{

  var dynamicRequestList = [];
    dynamicRequestList.push(props.getPinCodes_Sites());
    dynamicRequestList.push(props.getNearByLocations());

  return await Promise.all(dynamicRequestList).then(function(values) {
    document.getElementById('div-preloader').style.display = 'none';
  }, function(error){ 
    console.log(error);
    document.getElementById('div-preloader').style.display = 'none';
  });
}

class HomePage extends Component {
  render() {
    const {nearByLocations} = this.props;
   
    return (
      <Page id="homepage"
       title="Self Storage Units | Storage Facilities at Great Value Storage"
       description="Welcome to Great Value Storage. We offer storage solutions to meet all of your storage needs with ease and convenience. Call now or reserve online today.">
    <HomeBanner pageName="home" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
   { !!nearByLocations.siteLocations && nearByLocations.siteLocations.length >0 &&
     <CommonNearBy nearByLocations={nearByLocations.siteLocations}></CommonNearBy>
   }
    <main id="main">
    <HomeLocations allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeLocations>
    <HomeStorageSolutions></HomeStorageSolutions>
    <HomeWhyUs></HomeWhyUs>
    <HomeHowStorageWorks></HomeHowStorageWorks>
    <HomeRightStorageSpace></HomeRightStorageSpace>
    <HomeStorageTools></HomeStorageTools>
    {/* <HomeStorageSolutions></HomeStorageSolutions> */}
    <HomeTestimonials></HomeTestimonials>
    <CommonContactUs></CommonContactUs>
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
  })(HomePage)
);

