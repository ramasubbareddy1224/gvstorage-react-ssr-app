import "isomorphic-fetch";
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;

const getAllUnits = units => ({ type: ACTIONTYPES.SELF_STORAGE.GET_ALL_UNITS_LOCATION_CODE, payload: units });


  export const getAllUnitsByLocationCode = (locationCode) => (dispatch) => {
    var apiUrl = 'units/' + 'demo';

    return ApiRequest.url(apiUrl)
    .get()
    .json(json=>dispatch(getAllUnits(json)));
  };


