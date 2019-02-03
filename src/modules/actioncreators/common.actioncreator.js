import "isomorphic-fetch";
import wretch from "wretch"
import {Environment} from '../../configurations/environment';
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;



const actionCreator_FilterInfo = filterInfo  => ({ type: ACTIONTYPES.SHARED.GET_FILTER_INFO, payload: filterInfo });
const actionCreator_GetAllFacilitySites = facilitySites => ({type: ACTIONTYPES.SHARED.GET_ALL_FACILITY_SITES, payload: facilitySites });
//const actionCreator_FilterInfo = filterInfo  => ({ type: ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_CHECKBOXES, payload: filterInfo });



export const setFilterInfo = (data) => (dispatch) => {
         dispatch(actionCreator_FilterInfo(data));    
  };


  export const getFacilitySites = () =>  (dispatch) => {
    return new Promise(resolve=>{
      try{
      return ApiRequest.url('search/All')
      .get()
      .json(json=>{
        dispatch(actionCreator_GetAllFacilitySites(json));
        resolve(json);
      }
        )
        .catch(error=>{console.log('error in getFacilitySites api')});
      }
      catch{
        resolve({})
      }
    })
  };


  
  export const contactUs = (formData) =>{
    var apiUrl = 'contactus';
    return ApiRequest.url(apiUrl).
    post(formData)
    .json(json=> json)
    .catch(error=>{console.log('error in contactUs api')});
  }





