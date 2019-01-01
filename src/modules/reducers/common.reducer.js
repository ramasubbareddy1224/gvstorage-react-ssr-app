
import {ACTIONTYPES} from '../../configurations/actiontypes'

const INITIAL_STATE = {filterInfo: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.SHARED.GET_FILTER_INFO:
        return { ...state, filterInfo: action.payload};

      default:
      return state;
    }
  }