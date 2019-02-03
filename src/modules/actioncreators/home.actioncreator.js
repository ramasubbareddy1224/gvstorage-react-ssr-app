import "isomorphic-fetch";
import wretch from "wretch"
import {Environment} from '../../configurations/environment';
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import { checkCacheValid } from "redux-cache";


const getAllNearByLocations = locations => ({ type: ACTIONTYPES.HOME.GET_NEAR_BY_LOCATIONS, payload: locations });
const actionCreator_PinCodes_Sites = pincodes_sites  => ({ type: ACTIONTYPES.HOME.GET_ALL_PINCODES_SITES, payload: pincodes_sites });


const FETCH_TIMEOUT = Environment.FETCH_TIMEOUT;
let pinCodes_SitesTimeOut = false;
let nearByTimeOut = false;

  export const getPinCodes = () => {
    return new Promise(resolve =>{

      try{
      return ApiRequest.url(`postalcodes`)
      .get()
      .json(json=>resolve(json))
      .catch(error=>{console.log('error in postalcodes api')})
      ;
    }
    catch{
      resolve({})
    }
    });
    
  };

  export const getSites = () => {
    return new Promise(resolve=>{
      try{
      return ApiRequest.url(`sites`)
      .get()
      .json(json=>resolve(json))
      .catch(error=>{console.log('error in sites api')})
      ;
      }
      catch{
        resolve({})
      }
    })
  };

  export const getPinCodes_Sites = () => (dispatch, getState) => {
    return new Promise((resolve, reject)=>{
       try
       {
      pinCodes_SitesTimeOut = false;
      const timeout1 = setTimeout(function() {
        pinCodes_SitesTimeOut = true;
        reject('Timeout');
      }, FETCH_TIMEOUT);

      const isCacheValid = checkCacheValid(getState, "homePageData",{cacheKey:"cacheAllPinCodes_Sites"});
      if (isCacheValid) {
        return  resolve({});
      }
      Promise.all([getPinCodes(),getSites()]).then(response=>{
         // Clear the timeout as cleanup
         clearTimeout(timeout1);
         if(!pinCodes_SitesTimeOut) {
             dispatch(actionCreator_PinCodes_Sites(response));
             resolve(response);
         }
        //resolve({})
      })
    }
    catch{
      resolve({});
    }
    }
    )   

  };

  export const getCurrentLocation = () =>{
    var apiUrl = Environment.IP_STACK_ENDPOINT;
    //console.log(apiUrl)
    return wretch()
    .url(apiUrl).
    get()
    .json(json=> json)
    .catch(error=>{console.log('error in getCurrentLocation api')})
    ;
  };


  export const getNearByLocations = () => (dispatch,getState) => {
    return new Promise((resolve,reject) =>{
      nearByTimeOut = false;
      const timeout2 = setTimeout(function() {
        nearByTimeOut = true;
        reject('Timeout');
      }, FETCH_TIMEOUT);

    const isCacheValid = checkCacheValid(getState, "homePageData",{cacheKey:'cacheNearByLocations'});
    if (isCacheValid) {
      return  resolve({});
    }
    
    var apiUrl = `nearbysites`;
    return ApiRequest.url(apiUrl)
    .get()
    .json(json=>{
       // Clear the timeout as cleanup
       clearTimeout(timeout2);
       if(!nearByTimeOut) {
           dispatch(getAllNearByLocations(json))
           resolve(json);
       }
      }
    )
    .catch(error=>{console.log('error in nearbysites api')})
    ;
    });
  };
