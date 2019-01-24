

  import "isomorphic-fetch";
  import { ApiRequest } from '../../utility' ;

  export const addTenant = (formData) =>{
    var apiUrl = 'tenant';
    return ApiRequest.url(apiUrl).
    post(formData)
    .json(json=> json)
    .catch( err => {
      console.log(err);
      document.getElementById('div-preloader').style.display = 'none';
      });
  }

  export const getTenantInfo = (tenantId,locationCode) =>{
    var apiUrl = `tenant/${tenantId}/${locationCode}`;
    return ApiRequest.url(apiUrl).
    get()
    .json(json=> json)
    .catch( err => {
      console.log(err);
      document.getElementById('div-preloader').style.display = 'none';
      });
  }

  export const confirmPayment = (formData) => {
      var apiUrl ='movein';
      return ApiRequest.url(apiUrl).
    post(formData)
    .json(json=> json)
    .catch( err => {
      console.log(err);
      document.getElementById('div-preloader').style.display = 'none';
      }); 
  }
