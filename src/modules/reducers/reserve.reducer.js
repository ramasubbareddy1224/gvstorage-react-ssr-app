
import {ACTIONTYPES} from '../../configurations/actiontypes'

const INITIAL_STATE = {moveInCharges: [],  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.RESERVE.GET_ALL_MOVEIN_CHARGES:
          return { ...state, moveInCharges: action.payload};

      default:
      return state;
    }
  }
