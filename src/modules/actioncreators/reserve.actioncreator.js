import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;

const getAllMoveInChargesActionCreator = moveInCharges => ({ type: ACTIONTYPES.RESERVE.GET_ALL_MOVEIN_CHARGES, payload: moveInCharges });

const getAllSelectedUnitInfoActionCreator = selectedUnitInfo => ({type: ACTIONTYPES.RESERVE.GET_SELECTED_UNIT_INFO, payload: selectedUnitInfo });

  export const getAllMoveInCharges = (requestData) => (dispatch) => {
    var apiUrl = 'moveincharges';
    return ApiRequest.url(apiUrl)
    .post(requestData)
    .json(json=>dispatch(getAllMoveInChargesActionCreator(json)))
    .catch(error=>{console.log('error in getAllMoveInCharges api')});
  };

  export const getSelectedUnitInfo = (locationCode, unitId) => (dispatch) => {
    var apiUrl = `units/${locationCode}/${unitId}`;
    return ApiRequest.url(apiUrl).
    get()
    .json(json=>dispatch(getAllSelectedUnitInfoActionCreator(json)))
    .catch(error=>{console.log('error in getSelectedUnitInfo api')});
  }

  export const reserveNow = (formData) =>{
    var apiUrl = 'reservation';
    return ApiRequest.url(apiUrl).
    post(formData)
    .json(json=> json)
    .catch(error=>{console.log('error in reserveNow api')});
  }


