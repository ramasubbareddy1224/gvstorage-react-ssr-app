import Page from '../../components/page';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import HomeBanner from '../../components/common/home.banner';
import { getPinCodes_Sites
  } from '../../../modules/actioncreators/home.actioncreator';
import  CommonStaticBreadCrumb from '../../components/common/common.static-breadcrumb';
import CommonStaticContent from '../../components/common/common.static-content';

import $ from 'jquery'
import { StaticContent } from '../../../static-content';

const frontload = async props =>{

  var dynamicRequestList = [];
  if(props.allPinCodes_Sites.length == 0){
    dynamicRequestList.push(props.getPinCodes_Sites());
  }

  return Promise.all(dynamicRequestList).then(function(values) {
  });
}

class AboutUs extends Component {
  render() {
    return (
      <Page id="about-us">
    <HomeBanner pageName="About Us" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
    <CommonStaticBreadCrumb pageName="About Us" ></CommonStaticBreadCrumb>
    <main id="main">
    <section id="about" class="about-sec">
        <CommonStaticContent pageContent={StaticContent.AboutUs}></CommonStaticContent>
    </section>
    </main>
  </Page>
    );
  }
}

const mapStateToProps = state => ({
  allPinCodes_Sites: state.homePageData.pinCodes_Sites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({  getPinCodes_Sites }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(AboutUs)
);

