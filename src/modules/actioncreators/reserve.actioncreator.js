import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;

const getAllMoveInChargesActionCreator = moveInCharges => ({ type: ACTIONTYPES.RESERVE.GET_ALL_MOVEIN_CHARGES, payload: moveInCharges });

const getAllSelectedUnitInfoActionCreator = selectedUnitInfo => ({type: ACTIONTYPES.RESERVE.GET_SELECTED_UNIT_INFO, payload: selectedUnitInfo });

  export const getAllMoveInCharges = (requestData) => (dispatch) => {
    var apiUrl = 'moveincharges';
    // var data = {
    //     "concessionID": 1731,
    //     "insurCoverageID": 669,
    //     "locationCode": "DEMO4",
    //     "moveInDate": "2019-01-12",
    //     "siteID": 7022,
    //     "tenantID": 0,
    //     "unitID": 32988
    //   }
    return ApiRequest.url(apiUrl)
    .post(requestData)
    .json(json=>dispatch(getAllMoveInChargesActionCreator(json)));
  };

  export const getSelectedUnitInfo = (locationCode, unitId) => (dispatch) => {
    var apiUrl = `units/${locationCode}/${unitId}`;
    return ApiRequest.url(apiUrl).
    get()
    .json(json=>dispatch(getAllSelectedUnitInfoActionCreator(json)));
  }


