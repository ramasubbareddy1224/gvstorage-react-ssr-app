import Page from '../../components/page';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import HomeBanner from '../../components/common/home.banner';
import { getPinCodes_Sites
  } from '../../../modules/actioncreators/home.actioncreator';

  import { getFacilitySites
  } from '../../../modules/actioncreators/common.actioncreator'; 

import  CommonStaticBreadCrumb from '../../components/common/common.static-breadcrumb';
import CommonContactUs from '../../components/common/common.contact-us';

const frontload = async props =>{

  var dynamicRequestList = [];
  if(props.allPinCodes_Sites.length == 0){
    dynamicRequestList.push(props.getPinCodes_Sites());
  }
  dynamicRequestList.push(props.getFacilitySites());

  document.getElementById('div-preloader').style.display = 'block';
  return Promise.all(dynamicRequestList).then(function(values) {
    document.getElementById('div-preloader').style.display = 'none';
  });
}

class ContactUs extends Component {
  render() {
    const {allFacilitySites} = this.props;
    return (
      <Page id="contact-us">
      <HomeBanner pageName="Contact Us" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
      <CommonStaticBreadCrumb pageName="Contact Us" ></CommonStaticBreadCrumb>
      <main id="main">
      <section id="about" class="rent-sec">
          <CommonContactUs allFacilitySites={allFacilitySites}></CommonContactUs>
      </section>
      </main>
    </Page>
    );
  }
}

const mapStateToProps = state => ({
  allPinCodes_Sites: state.homePageData.pinCodes_Sites,
  allFacilitySites: state.commonData.facilitySites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({  getPinCodes_Sites, getFacilitySites }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(ContactUs)
);

