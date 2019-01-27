import "isomorphic-fetch";
import wretch from "wretch"
import {Environment} from '../../configurations/environment';
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;
import { showLoading, hideLoading } from 'react-redux-loading-bar';


const getAllDiscounts = discounts => ({ type: ACTIONTYPES.HOME.GET_ALL_DISCOUNTS, payload: discounts });
const getAllPinCodes = pincodes => ({ type: ACTIONTYPES.HOME.GET_ALL_PINCODES, payload: pincodes });
const getAllSites = sites => ({ type: ACTIONTYPES.HOME.GET_ALL_SITES, payload: sites });

const getAllNearByLocations = locations => ({ type: ACTIONTYPES.HOME.GET_NEAR_BY_LOCATIONS, payload: locations });


const actionCreator_PinCodes_Sites = pincodes_sites  => ({ type: ACTIONTYPES.HOME.GET_ALL_PINCODES_SITES, payload: pincodes_sites });

export const getDiscounts = () => (dispatch) => {
    // return fetch(`${Environment.MW_END_POINT_URL}/api/NOP/Discount/GetAllDiscounts`)
    //   .then(response => response.json())
    //   .then(data => dispatch(getAllDiscounts(data)))
    return ApiRequest.url(`/NOP/Discount/GetAllDiscounts`)
    .get()
    .json(json=>dispatch(getAllDiscounts(json)));
  };

  export const getPinCodes = () => {
    return new Promise(resolve=>{
      try{
      return ApiRequest.url(`postalcodes`)
      .get()
      .json(json=>resolve(json));
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
      .json(json=>resolve(json));
      }
      catch{
        resolve({})
      }
    })
  };

  // export const getPinCodes_Sites = () => (dispatch) => {
  //   dispatch(showLoading());
  //  return Promise.all(
  //    [
  //      ApiRequest.url(`postalcodes`).get().json(postalCodeJson => { return  postalCodeJson}), 
  //      ApiRequest.url(`sites`).get().json(sitesJson => {return sitesJson})
  //   ]).then(function(values) {
  //     dispatch(hideLoading());
  //     dispatch(actionCreator_PinCodes_Sites(values));
     
  //   });

  export const getPinCodes_Sites = () => (dispatch) => {
    return new Promise(resolve=>{
     // dispatch(showLoading());
      Promise.all([getPinCodes(),getSites()]).then(response=>{
        //dispatch(hideLoading());
        dispatch(actionCreator_PinCodes_Sites(response));
        resolve({})
      })
    })   

  };

  export const getCurrentLocation = () =>{
    var apiUrl = Environment.IP_STACK_ENDPOINT;
    //console.log(apiUrl)
    return wretch()
    .url(apiUrl).
    get()
    .json(json=> json);
  };


  export const getNearByLocations = () => (dispatch) => {
    var apiUrl = `nearbysites`;
    return ApiRequest.url(apiUrl)
    .get()
    .json(json=>dispatch(getAllNearByLocations(json)));
  };
