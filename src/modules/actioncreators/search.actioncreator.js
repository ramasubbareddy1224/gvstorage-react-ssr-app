import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;

const getAllSites = sites => ({ type: ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_FILTER, payload: sites });


  export const getAllSitesByFilters = (filterValue) => (dispatch) => {
    var apiUrl = 'search/' + filterValue;
    // if(filterType == 'postalCode'){
    //     apiUrl = `sitesbypostalcode/${mainValue}`;
    //   }
    //   else if(filterType == 'state'){
    //     apiUrl = `sitesbystate/${mainValue}`;
    //   }
    //   else if(filterType == 'city'){
    //     apiUrl = `sitesbycity/${mainValue}/${subValue}`;
    //   }

    return ApiRequest.url(apiUrl)
    .get()
    .json(json=>dispatch(getAllSites(json)));
  };


