import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;

const getAllUnits = units => ({ type: ACTIONTYPES.SELF_STORAGE.GET_ALL_UNITS_LOCATION_CODE, payload: units });
const resetUnit=()=>({type:ACTIONTYPES.SELF_STORAGE.RESET_SELF_STORAGE_ALL_UNITS,payload:{}});

  export const getAllUnitsByLocationCode = (locationCode) => (dispatch) => {

   return new Promise(resolve=>{
      var apiUrl = 'units/' + locationCode;
     return ApiRequest.url(apiUrl)
      .get()
      .json(json=> {        
        dispatch(getAllUnits(json));
        resolve(json);
      });
    })
   
  };
export const resetSelfStorageUnits=()=> dispatch=>{
  return dispatch(resetUnit());
}

