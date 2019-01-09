import React, { Component } from 'react';
import Page from '../../components/page';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import CommonBreadCrumb from '../../components/common/common.breadcrumb';
import CommonFacilityInfo from '../../components/common/common.facilityinfo';
import ReserveFormFilling from '../../components/common/reserve.formfilling';

import { getAllSitesByFilters } from '../../../modules/actioncreators/search.actioncreator';
import { getPinCodes_Sites
} from '../../../modules/actioncreators/home.actioncreator';


const frontload = async props => {
  return Promise.all([props.getPinCodes_Sites(), props.getAllSitesByFilters(props.match.params.filter)]).then(function(values) {
  });
};



class Reserve extends Component {  

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.filter !== this.props.match.params.filter) {
      Promise.all([this.props.getPinCodes_Sites(), this.props.getAllSitesByFilters(nextProps.match.params.filter)]).then(function(values) {
      });
    }

    return true;
  }

  render() {

    return (
    <Page id="reserve">
        {/* <CommonBreadCrumb></CommonBreadCrumb> */}
        <main id="main" className="citypage-section"> 
        <section id="about" className="rent-sec wow fadeInUp">
            <div className="container">
            <div className="row">
                <div className="rent-facility-info">
                <div className="row">
                    <CommonFacilityInfo></CommonFacilityInfo>
                    <ReserveFormFilling></ReserveFormFilling>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </main>
    </Page>
    );
  }
}

const mapStateToProps = state => ({
  allPinCodes_Sites: state.homePageData.pinCodes_Sites,
   allSites: state.searchPageData.sites,
   allFilters: state.commonData.filterInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPinCodes_Sites, getAllSitesByFilters }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Reserve)
);
