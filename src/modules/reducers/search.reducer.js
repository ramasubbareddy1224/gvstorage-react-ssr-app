
import {ACTIONTYPES} from '../../configurations/actiontypes'
import searchFiltereddata from '../../app/components/common/search.filtereddata';

const INITIAL_STATE = {sites: {}, originalSites: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_FILTER:
          return { ...state, sites: action.payload, originalSites: action.payload};
        case ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_CHECKBOXES:
          return { ...state, sites: filterData(state.originalSites, action.payload) }

      default:
      return state;
    }
  }


 function filterData(sites, payload){
    return [];
 }