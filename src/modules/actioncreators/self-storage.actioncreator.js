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
      })
      .catch( err => {
        console.log(err);
        document.getElementById('div-preloader').style.display = 'none';
        });
    })
   
  };

  // export const getAllUnitsByLocationCode = (locationCode) => (dispatch) => {
  // return new Promise(resolve=>{
  //  return fetch(`${Environment.MW_END_POINT_URL}gvs/api/units/${locationCode}`)
  //   .then(function(response) {
  //       if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //       }
  //       return response.json();
  //   })
  //   .then(function(json) {
  //       console.log(json);
  //       dispatch(getAllUnits(json));
  //       resolve(json);
  //   });    
  //    })
    
  //  };

  // export const getAllUnitsByLocationCode = (locationCode) => async dispatch => {
  //   const res = await axios.get(`${Environment.MW_END_POINT_URL}gvs/api/units/${locationCode}`);
  //   console.log('result',res);
  //   return dispatch(getAllUnits(res.data));
  // }

export const resetSelfStorageUnits=()=> dispatch=>{
  return dispatch(resetUnit());
}

