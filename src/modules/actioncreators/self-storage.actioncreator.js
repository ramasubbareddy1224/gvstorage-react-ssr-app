import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import { checkCacheValid } from "redux-cache";
import {Environment} from '../../configurations/environment';


const getAllUnits = (units, locationCode) => ({ type: ACTIONTYPES.SELF_STORAGE.GET_ALL_UNITS_LOCATION_CODE, payload: units, locationCode: locationCode });
const resetUnit= (storeData) =>({type:ACTIONTYPES.SELF_STORAGE.RESET_SELF_STORAGE_ALL_UNITS, payload: storeData  });
const updateUnitInfo = (storeData, locationCode) => ({ type: ACTIONTYPES.SELF_STORAGE.UPDATE_UNITINFO, payload: storeData,locationCode: locationCode });

const FETCH_TIMEOUT = Environment.FETCH_TIMEOUT;
let didTimeOut = false;

  export const getAllUnitsByLocationCode = (locationCode) => (dispatch, getState) => {
   return new Promise((resolve, reject)=>{
    didTimeOut = false;
    const timeout = setTimeout(function() {
      didTimeOut = true;
      reject('Timeout');
  }, FETCH_TIMEOUT);

    const isCacheValid = checkCacheValid(getState, "selfStorageData",{cacheKey:locationCode+"_time"});
    if (isCacheValid) {
      var state = getState();
      dispatch(updateUnitInfo(state.selfStorageData, locationCode)) 
      return  resolve(state.selfStorageData[locationCode]);
      }

      var apiUrl = 'units/' + locationCode;
     return ApiRequest.url(apiUrl)
      .get()
      .json(json=> {
         // Clear the timeout as cleanup
         clearTimeout(timeout);
         if(!didTimeOut) {
             dispatch(getAllUnits(json, locationCode));
             resolve(json);
         }
      });
    })
   
  };

export const resetSelfStorageUnits=()=> (dispatch, getState)=>{
  var state = getState();
    return  dispatch(resetUnit(state.selfStorageData)) 
    //return dispatch(resetUnit());
}

