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

class PersonalStorage extends Component {

  componentDidCatch(error, info) {
    console.log('error in PersonalStorage');
  }
  
  componentDidMount(){
    let $=require('jquery');
    $('#personal-storage-head').addClass('active');
    $('#personal-storage-content').addClass('active');

    
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
      <Page id="personal-storage"
      title="Affordable &amp; Convenient Self Storage Units | Great Value Storage"
      description="Reclaim your living space with affordable self storage at Great Value Storage. We offer flexible storage unit rentals, low monthly rates, and unparalleled customer service.">
    <HomeBanner pageName="Personal Storage" allPinCodes_Sites ={this.props.allPinCodes_Sites}></HomeBanner>
    <CommonStaticBreadCrumb pageName="Personal Storage" routeName="Storage Options" ></CommonStaticBreadCrumb>
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
  })(PersonalStorage)
);

