import "isomorphic-fetch";
import wretch from "wretch"
import {Environment} from '../../configurations/environment';
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;



const actionCreator_FilterInfo = filterInfo  => ({ type: ACTIONTYPES.SHARED.GET_FILTER_INFO, payload: filterInfo });
//const actionCreator_FilterInfo = filterInfo  => ({ type: ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_CHECKBOXES, payload: filterInfo });



export const setFilterInfo = (data) => (dispatch) => {
         dispatch(actionCreator_FilterInfo(data));
         
  };





