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

import { StaticContent } from '../../../static-content';



const frontload = async props =>{

  var dynamicRequestList = [];
  dynamicRequestList.push(props.getPinCodes_Sites());
  
  document.getElementById('div-preloader').style.display = 'block';
  return Promise.all(dynamicRequestList).then(function(values) {
    document.getElementById('div-preloader').style.display = 'none';
  });
}

class VehicleStorage extends Component {

  componentDidCatch(error, info) {
    console.log('error in VehicleStorage');
  }

  componentDidMount(){
    let $=require('jquery');
    $('#vehicle-storage-head').addClass('active');
    $('#vehicle-storage-content').addClass('active');

    
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $('#endBreadcrumb').text($('a.active span').text());    
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    }); 
  }

  render() {
    return (
      <Page id="vehicle-storage"
      title="Secure Vehicle Storage | RV &amp; Boat Parking | Great Value Storage"
      description="Store your car, boat, or RV safely and securely with Great Value Storage. Short and long-term vehicle storage available at low monthly rates. Call now.">
    <HomeBanner pageName="Vehicle Storage" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
    <CommonStaticBreadCrumb pageName="Vehicle Storage" routeName="Storage Options"></CommonStaticBreadCrumb>
    <main id="main">
    <section id="selfstorage" class="pt-3">
        <CommonStaticContent pageContent={StaticContent.StorageOptions}></CommonStaticContent>
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
  })(VehicleStorage)
);

