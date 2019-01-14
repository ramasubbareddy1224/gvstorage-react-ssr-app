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
import { getAllMoveInCharges, getSelectedUnitInfo } from '../../../modules/actioncreators/reserve.actioncreator';


var pathParams = {};

const frontload = async props => {
  pathParams = props.match.params;


  var dynamicRequestList = [];
  if(props.allPinCodes_Sites.length == 0){
    dynamicRequestList.push(props.getPinCodes_Sites());
  }

  if(Object.keys(props.allUnits).length == 0){
    pathParams.isReloaded = false;

    dynamicRequestList.push(props.getSelectedUnitInfo(pathParams.locationCode, pathParams.unitId));
    return Promise.all(dynamicRequestList).then(function(values) {

      var requestObj = {
        "concessionID": values[1].payload.unit.concessionID,
        "insurCoverageID": values[1].payload.insurancePlans[0].insurCoverageID,
        "locationCode": pathParams.locationCode,
        "moveInDate": "2019-01-12",
        "siteID": values[1].payload.unit.siteID,
        "tenantID": 0,
        "unitID": pathParams.unitId
      };

     props.getAllMoveInCharges(requestObj);
    });
  }
  else{

    pathParams.isReloaded = true;

    const unitInfo = props.allUnits.units.filter(x=>x.firstAvailableUnitID == pathParams.unitId);

    var requestObj = {
      "concessionID": unitInfo[0].concessionID,
      "insurCoverageID": props.allUnits.insurancePlans[0].insurCoverageID,
      "locationCode": pathParams.locationCode,
      "moveInDate": "2019-01-12",
      "siteID": unitInfo[0].siteID,
      "tenantID": 0,
      "unitID": pathParams.unitId
    };

    dynamicRequestList.push(props.getAllMoveInCharges(requestObj));


   return Promise.all(dynamicRequestList).then(function(values) {
    
   });
  }

  // return Promise.all([
  //   props.getPinCodes_Sites(), 
  //   props.getAllUnitsByLocationCode(props.match.params.locationCode)
  //   ]).then(function(values) {
  //     debugger;
  //     props.getAllMoveInCharges('')
  // });
  
};


class Reserve extends Component {  

  render() {
    const { allUnits } = this.props;
    const {moveInCharges} = this.props;
    const {selectedUnitInfo} = this.props;

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
                    <CommonFacilityInfo allUnits={allUnits} selectedUnitInfo={selectedUnitInfo} pathParams={pathParams} moveInCharges={moveInCharges}></CommonFacilityInfo>
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
   moveInCharges: state.reserveData.moveInCharges,
   selectedUnitInfo: state.reserveData.selectedUnitInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPinCodes_Sites, getAllSitesByFilters,getAllUnitsByLocationCode, getAllMoveInCharges, getSelectedUnitInfo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(Reserve)
);
