
import {ACTIONTYPES} from '../../configurations/actiontypes'

const INITIAL_STATE = {filterInfo: {}, facilitySites: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.SHARED.GET_FILTER_INFO:
        return { ...state, 
              filterInfo:Object.assign({},action.payload)             
        };

        case ACTIONTYPES.SHARED.GET_ALL_FACILITY_SITES:
        return  { ...state, facilitySites: action.payload}

      default:
      return state;
    }
  }