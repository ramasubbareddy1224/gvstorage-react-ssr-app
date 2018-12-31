import "isomorphic-fetch";
import wretch from "wretch"
import {Environment} from '../../configurations/environment';
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;

const getAllDiscounts = discounts => ({ type: ACTIONTYPES.HOME.GET_ALL_DISCOUNTS, payload: discounts });
const getAllPinCodes = pincodes => ({ type: ACTIONTYPES.HOME.GET_ALL_PINCODES, payload: pincodes });
const getAllSites = sites => ({ type: ACTIONTYPES.HOME.GET_ALL_SITES, payload: sites });


const actionCreator_PinCodes_Sites = pincodes_sites  => ({ type: ACTIONTYPES.HOME.GET_ALL_PINCODES_SITES, payload: pincodes_sites });

export const getDiscounts = () => (dispatch) => {
    // return fetch(`${Environment.MW_END_POINT_URL}/api/NOP/Discount/GetAllDiscounts`)
    //   .then(response => response.json())
    //   .then(data => dispatch(getAllDiscounts(data)))
    return ApiRequest.url(`/NOP/Discount/GetAllDiscounts`)
    .get()
    .json(json=>dispatch(getAllDiscounts(json)));
  };

  export const getPinCodes = () => (dispatch) => {
    return ApiRequest.url(`postalcodes`)
    .get()
    .json(json=>dispatch(getAllPinCodes(json)));
  };

  export const getSites = () => (dispatch) => {
    return ApiRequest.url(`sites`)
    .get()
    .json(json=>dispatch(getAllSites(json)));
  };

  export const getPinCodes_Sites = () => (dispatch) => {
    Promise.all([ApiRequest.url(`postalcodes`).get().json(postalCodeJson => { return  postalCodeJson}), 
      ApiRequest.url(`sites`).get().json(sitesJson => {return sitesJson})
    ]).then(function(values) {
      dispatch(actionCreator_PinCodes_Sites(values));
    });
  };

