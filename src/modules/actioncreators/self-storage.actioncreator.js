import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import {Environment} from '../../configurations/environment';

const getAllUnits = units => ({ type: ACTIONTYPES.SELF_STORAGE.GET_ALL_UNITS_LOCATION_CODE, payload: units });
const resetUnit=()=>({type:ACTIONTYPES.SELF_STORAGE.RESET_SELF_STORAGE_ALL_UNITS,payload:{}});

  // export const getAllUnitsByLocationCode = (locationCode) => (dispatch) => {
  //  return new Promise(resolve=>{
  //     var apiUrl = 'units/' + locationCode;
  //    return ApiRequest.url(apiUrl)
  //     .get()
  //     .json(json=> {        
  //       dispatch(getAllUnits(json));
  //       resolve(json);
  //     });
  //   })
   
  // };

  export const getAllUnitsByLocationCode = (locationCode) => (dispatch) => {
  return new Promise(resolve=>{
   return fetch(`${Environment.MW_END_POINT_URL}gvs/api/units/${locationCode}`)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        dispatch(getAllUnits(json));
        resolve(json);
    });    
     })
    
   };


export const resetSelfStorageUnits=()=> dispatch=>{
  return dispatch(resetUnit());
}

