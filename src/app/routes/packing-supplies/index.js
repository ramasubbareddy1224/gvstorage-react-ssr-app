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

class PackingSupplies extends Component {
  componentDidMount(){
    $('#packing-supplies-head').addClass('active');
    $('#packing-supplies-content').addClass('active');

    
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    }); 
  }

  render() {
    return (
      <Page id="packing-supplies">
    <HomeBanner pageName="Packing Supplies" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
    <CommonStaticBreadCrumb pageName="Packing Supplies" routeName="Storage Tools"></CommonStaticBreadCrumb>
    <main id="main">
    <section id="selfstorage" class="pt-3">
        <CommonStaticContent pageContent={StaticContent.StorageTools}></CommonStaticContent>
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
  })(PackingSupplies)
);

