
import {ACTIONTYPES} from '../../configurations/actiontypes'

const INITIAL_STATE = {units: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.SELF_STORAGE.GET_ALL_UNITS_LOCATION_CODE:
          return { ...state, units: action.payload};
        case ACTIONTYPES.SELF_STORAGE.RESET_SELF_STORAGE_ALL_UNITS:
          return INITIAL_STATE 
      default:
      return state;
    }
  }

