
import {ACTIONTYPES} from '../../../configurations/actiontypes'

const INITIAL_STATE = {sites: {}, pinCodes: {}, pinCodes_Sites: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
      
      case ACTIONTYPES.HOME.GET_ALL_SITES:
      return { ...state, sites: action.payload};
    
      case ACTIONTYPES.HOME.GET_ALL_PINCODES_SITES:
    
      return { ...state, pinCodes_Sites: action.payload }

      default:
      return state;
    }
  }