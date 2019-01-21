import React, { Component } from 'react';
import Page from '../../components/page';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import CommonBreadCrumb from '../../components/common/common.breadcrumb';
import CommonFacilityInfo from '../../components/common/common.facilityinfo';
import RentFormFilling from '../../components/common/rent.formfilling';

import { getAllSitesByFilters } from '../../../modules/actioncreators/search.actioncreator';
import { getPinCodes_Sites
} from '../../../modules/actioncreators/home.actioncreator';
import { getAllUnitsByLocationCode } from '../../../modules/actioncreators/self-storage.actioncreator';
import { getAllMoveInCharges, getSelectedUnitInfo } from '../../../modules/actioncreators/reserve.actioncreator';


const formatDate=(date) =>{
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}


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


        var value = values.filter(x=> (!!x && x["type"] == "GET_SELECTED_UNIT_INFO"))[0]

      var requestObj = {
        "concessionID": value.payload.unit.concessionID,
        "insurCoverageID": value.payload.insurancePlans[0].insurCoverageID,
        "locationCode": pathParams.locationCode,
        "moveInDate": formatDate(new Date()),
        "siteID": value.payload.unit.siteID,
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
      "moveInDate": formatDate(new Date()),
      "siteID": unitInfo[0].siteID,
      "tenantID": 0,
      "unitID": pathParams.unitId
    };

    dynamicRequestList.push(props.getAllMoveInCharges(requestObj));


   return Promise.all(dynamicRequestList).then(function(values) {
    
   });
  }
  
};


class Rent extends Component {  

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
                    <RentFormFilling allUnits={allUnits} selectedUnitInfo={selectedUnitInfo} pathParams={pathParams} moveInCharges={moveInCharges}></RentFormFilling>
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
  })(Rent)
);
