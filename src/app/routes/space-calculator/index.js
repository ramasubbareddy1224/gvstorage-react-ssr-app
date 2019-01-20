import Page from '../../components/page';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import HomeBanner from '../../components/common/home.banner';

import { getPinCodes_Sites
  } from '../../../modules/actioncreators/home.actioncreator';
import CommonStaticBreadCrumb from '../../components/common/common.static-breadcrumb';
import CommonSpaceCalculator from '../../components/common/common.space-calculator';

const frontload = async props =>{

  var dynamicRequestList = [];
  if(props.allPinCodes_Sites.length == 0){
    dynamicRequestList.push(props.getPinCodes_Sites());
  }

  return Promise.all(dynamicRequestList).then(function(values) {
  });
}

class SpaceCalculator extends Component {
  render() {
    return (
      <Page id="space-calculator">
      <HomeBanner pageName="Space Calculator" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
      <CommonStaticBreadCrumb pageName="Space Calculator" routeName="Space Calculator"></CommonStaticBreadCrumb>
      <main id="main">
      <section id="spacecalc">
          <CommonSpaceCalculator allPinCodes_Sites ={this.props.allPinCodes_Sites}></CommonSpaceCalculator>
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
  })(SpaceCalculator)
);

