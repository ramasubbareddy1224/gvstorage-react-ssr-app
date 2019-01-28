
import {ACTIONTYPES} from '../../configurations/actiontypes'
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

const INITIAL_STATE = {sites: {}, originalSites: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_FILTER:
         // return { ...state, sites: action.payload, originalSites: action.payload};
          var updatedState  =  { ...state, [DEFAULT_KEY]: generateCacheTTL()};
          updatedState[action.filterValue+"_time"]=generateCacheTTL();
          updatedState[action.filterValue]=action.payload;
          updatedState.sites=updatedState[action.filterValue];
          updatedState.originalSites=updatedState[action.filterValue];
          return updatedState;
        case ACTIONTYPES.SEARCH.UPDATE_SITEINFO:
          var updatedState = state;
          updatedState.originalSites = updatedState[action.filterValue];
          updatedState.sites = updatedState[action.filterValue];
          return updatedState;
        case ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_CHECKBOXES:
          return { ...state, sites: filterData(state.originalSites, action.payload) }
        case ACTIONTYPES.SEARCH.RESET_ALL_SITES_BY_FILTER:
          //return INITIAL_STATE;
          var updatedState = state;
          updatedState.sites = {};
          updatedState.originalSites = {};
          return updatedState;

      default:
      return state;
    }
  }


 function filterData(sites, payload){
    return [];
 }