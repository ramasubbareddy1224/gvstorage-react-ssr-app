
import {ACTIONTYPES} from '../../configurations/actiontypes'

const INITIAL_STATE = {sites: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.SEARCH.GET_ALL_SITES_BY_FILTER:
        return { ...state, sites: action.payload};

      default:
      return state;
    }
  }