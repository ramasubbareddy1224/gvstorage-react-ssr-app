
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

const INITIAL_STATE = {sites: {}, pinCodes: {}, pinCodes_Sites: [], nearByLocations: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.HOME.GET_ALL_PINCODES:
        return { ...state, pinCodes: action.payload};

      case ACTIONTYPES.HOME.GET_ALL_SITES:
      return { ...state, sites: action.payload};
    
      case ACTIONTYPES.HOME.GET_ALL_PINCODES_SITES:
          var updatedState = { ...state,[DEFAULT_KEY]: generateCacheTTL()};
          updatedState['cacheAllPinCodes_Sites']=generateCacheTTL();
          updatedState.pinCodes_Sites=action.payload;
          return updatedState;
        //return { ...state, pinCodes_Sites: action.payload }

      case ACTIONTYPES.HOME.GET_NEAR_BY_LOCATIONS:
          var updatedState = { ...state,[DEFAULT_KEY]: generateCacheTTL()};
          updatedState['cacheNearByLocations']=generateCacheTTL();
          updatedState.nearByLocations=action.payload;
          return updatedState;

      default:
      return state;
    }
  }