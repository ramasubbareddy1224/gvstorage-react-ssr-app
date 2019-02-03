import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import { checkCacheValid } from "redux-cache";
import {Environment} from '../../configurations/environment';

const getAllSites = (sites, filterValue) => ({ type: ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_FILTER, payload: sites, filterValue: filterValue });
const resetSites=(storeData)=>({type:ACTIONTYPES.SEARCH.RESET_ALL_SITES_BY_FILTER,payload: storeData});
const updateSiteInfo = (storeData, filterValue) => ({ type: ACTIONTYPES.SEARCH.UPDATE_SITEINFO, payload: storeData,filterValue: filterValue });

const FETCH_TIMEOUT = Environment.FETCH_TIMEOUT;
let didTimeOut = false;

  export const getAllSitesByFilters = (filterValue) => (dispatch, getState) => {
    return new Promise((resolve,reject) =>{
      didTimeOut = false;
      const timeout = setTimeout(function() {
        didTimeOut = true;
        reject('Timeout');
      }, FETCH_TIMEOUT);

    const isCacheValid = checkCacheValid(getState, "searchPageData",{cacheKey:filterValue+"_time"});
    if (isCacheValid) {
      var state = getState();
      dispatch(updateSiteInfo(state.searchPageData, filterValue)) 
      return  resolve(state.searchPageData[filterValue]);
      }

      var apiUrl = 'search/' + filterValue;
      return ApiRequest.url(apiUrl)
      .get()
      .json(json=>{
         // Clear the timeout as cleanup
         clearTimeout(timeout);
         if(!didTimeOut) {
             dispatch(getAllSites(json, filterValue));
             resolve(json);
         }
       
      })
      .catch(error=>{console.log('error in getAllSitesByFilters api')});
    });
  };



  export const resetAllSites=()=> (dispatch, getState)=>{
    var state = getState();
      return  dispatch(resetSites(state.searchPageData)) 
      //return dispatch(resetUnit());
  }
  

