import {ACTIONTYPES} from '../../configurations/actiontypes'
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

const INITIAL_STATE = {units: {},  error: null, loading: false,[DEFAULT_KEY]: null};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.SELF_STORAGE.GET_ALL_UNITS_LOCATION_CODE:
          var updatedState = { ...state, units: action.payload,[DEFAULT_KEY]: generateCacheTTL()};
          updatedState[action.locationCode+"_time"]=generateCacheTTL();
          updatedState[action.locationCode]=action.payload;
          updatedState.units=updatedState[action.locationCode];
          return updatedState;
        case ACTIONTYPES.SELF_STORAGE.RESET_SELF_STORAGE_ALL_UNITS:
          //return INITIAL_STATE
          var updatedState = state;
            updatedState.units = {};
          return updatedState;
        case ACTIONTYPES.SELF_STORAGE.UPDATE_UNITINFO:
            var updatedState = state;
            updatedState.units = updatedState[action.locationCode];
            return updatedState;
      default:
      return state;
    }
  }