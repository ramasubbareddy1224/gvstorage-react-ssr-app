import React, { Component } from 'react';
import Page from '../../components/page';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import CommonFacilityInfo from '../../components/common/common.facilityinfo';
import RentFormFilling from '../../components/common/rent.formfilling';

import { getAllSitesByFilters } from '../../../modules/actioncreators/search.actioncreator';
import { getPinCodes_Sites
} from '../../../modules/actioncreators/home.actioncreator';
import { getAllUnitsByLocationCode } from '../../../modules/actioncreators/self-storage.actioncreator';
import { getAllMoveInCharges, getSelectedUnitInfo } from '../../../modules/actioncreators/reserve.actioncreator';
import RentPaymentFormFilling from '../../components/common/rent-payment.formfilling';
import {getTenantInfo} from '../../../modules/actioncreators/rent.actioncreator';


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
//var tenantInfo = {};

const frontload = async props => {
  pathParams = props.match.params;

 await props.getTenantInfo(pathParams.tenantId, pathParams.locationCode);
  // getTenantInfo(pathParams.tenantId, pathParams.locationCode).then((success)=>{
  //   if(!!success){
     
  //   if(success.status.code  == 200){
  //     tenantInfo = success;
  //   } 
  //   }
  // },
  // (error)=>{
  //   document.getElementById('div-preloader').style.display = 'none';
  //   console.log('error' + error);
   
  // });


  var dynamicRequestList = [];
  dynamicRequestList.push(props.getPinCodes_Sites());
  
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

    var promise = props.getAllMoveInCharges(requestObj);
    promise.then((success)=>{
      document.getElementById('div-preloader').style.display = 'none';
    });
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
    document.getElementById('div-preloader').style.display = 'none';
   });
  }
  
};


class RentPayment extends Component {  

  constructor(){
    super();
    this.state = {
      isInConfirmationScreen: false
    };
  }
  
onConfirmationPageEnter=()=>{
  this.setState({isInConfirmationScreen: true});
}

componentDidCatch(error, info) {
  console.log('error in RentPayment');
}
  render() {
    const { allUnits ,tenantInfo } = this.props;
    const {moveInCharges} = this.props;
    const {selectedUnitInfo} = this.props;

    console.log(pathParams)
    return (
    <Page id="reserve">
        {/* <CommonBreadCrumb></CommonBreadCrumb> */}
        <main id="main" className="citypage-section"> 
        <section class="breadcrumb-section">
                <div class="container">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="/">Home</a></li>
                      <li class="breadcrumb-item"><a href="/storage-options">Storage options</a></li>
                      <li class="breadcrumb-item" aria-current="page">Rent Now</li>
                    </ol>
                  </nav>
                </div>
              </section>
        <section id="about" className="rent-sec wow fadeInUp">
     
            <div className="container">
            <div className="alert alert-success fade in alert-dismissible show" id="reserveSuccessMsg">
                <strong id="successMsg"></strong> 
            </div>

            <div className="alert alert-danger fade in alert-dismissible show" id="reserveFailureMsg">
                <strong id="failureMsg"></strong>
            </div>
            <div className="row">
                <div className="rent-facility-info">
                <div className="row">
                <CommonFacilityInfo allUnits={allUnits} selectedUnitInfo={selectedUnitInfo} pathParams={pathParams} moveInCharges={moveInCharges} isInConfirmationScreen={this.state.isInConfirmationScreen}></CommonFacilityInfo>
                    {/* <RentFormFilling allUnits={allUnits} selectedUnitInfo={selectedUnitInfo} pathParams={pathParams} moveInCharges={moveInCharges}></RentFormFilling> */}
                    <RentPaymentFormFilling allUnits={allUnits} selectedUnitInfo={selectedUnitInfo} tenantInfo={tenantInfo} moveInCharges={moveInCharges} pathParams={pathParams}  onConfirmationPageEnter={this.onConfirmationPageEnter}></RentPaymentFormFilling>
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
   selectedUnitInfo: state.reserveData.selectedUnitInfo,
   tenantInfo:state.rentData.tenantInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPinCodes_Sites, getAllSitesByFilters,getAllUnitsByLocationCode, getAllMoveInCharges, getSelectedUnitInfo,getTenantInfo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(RentPayment)
);
