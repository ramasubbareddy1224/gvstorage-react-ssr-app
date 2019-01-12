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
import { getAllUnitsByLocationCode } from '../../../modules/actioncreators/self-storage.actioncreator';
import { getAllMoveInCharges } from '../../../modules/actioncreators/reserve.actioncreator';


var pathParams = {};

const frontload = async props => {
  pathParams = props.match.params;
  return Promise.all([
    props.getPinCodes_Sites(), 
    props.getAllUnitsByLocationCode(props.match.params.locationCode),
    props.getAllMoveInCharges('')  ]).then(function(values) {
  });
  
};


class Reserve extends Component {  

  render() {
    const { allUnits } = this.props;
    const {moveInCharges} = this.props;
    console.log(pathParams)
    return (
    <Page id="reserve">
        {/* <CommonBreadCrumb></CommonBreadCrumb> */}
        <main id="main" className="citypage-section"> 
        <section id="about" className="rent-sec wow fadeInUp">
            <div className="container">
            <div className="row">
                <div className="rent-facility-info">
                <div className="row">
                    <CommonFacilityInfo allUnits={allUnits} pathParams={pathParams} moveInCharges={moveInCharges}></CommonFacilityInfo>
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
   allUnits: state.selfStorageData.units,
   moveInCharges: state.reserveData.moveInCharges
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPinCodes_Sites, getAllSitesByFilters,getAllUnitsByLocationCode, getAllMoveInCharges }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Reserve)
);
