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

class BusinessStorage extends Component {
  
  componentDidMount(){
    let $=require('jquery');
    $('#business-storage-head').addClass('active');
    $('#business-storage-content').addClass('active');

    
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
      <Page id="business-storage"
      title="Small Business Storage Units | Great Value Storage"
      description="Easily and affordably store sensitive documents, inventory, product samples, and tools with commercial and business storage units at Great Value Storage. Call now for low monthly rates.">
    <HomeBanner pageName="Business Storage" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
    <CommonStaticBreadCrumb pageName="Business Storage" routeName="Storage Options" ></CommonStaticBreadCrumb>
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
  })(BusinessStorage)
);

