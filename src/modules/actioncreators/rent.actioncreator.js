

  import "isomorphic-fetch";
  import { ApiRequest } from '../../utility' ;
  import {ACTIONTYPES} from '../../configurations/actiontypes';

 const actionCreator_GetTenantInfo = data => ({type: ACTIONTYPES.RENT.GET_TENENT_INFO, payload: data });


  export const addTenant = (formData) =>{
    var apiUrl = 'tenant';
    return ApiRequest.url(apiUrl).
    post(formData)
    .json(json=> json);
  }

  // export const getTenantInfo = (tenantId,locationCode) =>{
  //   var apiUrl = `tenant/${tenantId}/${locationCode}`;
  //   return ApiRequest.url(apiUrl).
  //   get()
  //   .json(json=> json);
  // }

  export const confirmPayment = (formData) => {
      var apiUrl ='movein';
      return ApiRequest.url(apiUrl).
    post(formData)
    .json(json=> json);
  }

  export const getTenantInfo = (tenantId,locationCode) =>  (dispatch) => {
    return new Promise(resolve=>{
      try{
      return ApiRequest.url(`tenant/${tenantId}/${locationCode}`)
      .get()
      .json(json=>{
        dispatch(actionCreator_GetTenantInfo(json));
        resolve(json);
      }
        );
      }
      catch{
        resolve({})
      }
    })
  };
