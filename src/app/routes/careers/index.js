import Page from '../../components/page';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import HomeBanner from '../../components/common/home.banner';
import HomeLocations from '../../components/common/home.locations';
import HomeStorageSolutions from '../../components/common/home.storagesolutions';
import HomeWhyUs from '../../components/common/home.whyus';
import HomeTestimonials from '../../components/common/home.testimonials';
import CommonContactUs from '../../components/common/common.contactus';


import { getPinCodes_Sites
  } from '../../../modules/actioncreators/home.actioncreator';

const frontload = async props =>{

  var dynamicRequestList = [];
  if(props.allPinCodes_Sites.length == 0){
    dynamicRequestList.push(props.getPinCodes_Sites());
  }

  return Promise.all(dynamicRequestList).then(function(values) {
  });
}

class Careers extends Component {
  render() {
    return (
      <Page id="homepage">
    <HomeBanner pageName="home" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
    <main id="main">
        <h2>Coming Soon</h2>
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
  })(Careers)
);

