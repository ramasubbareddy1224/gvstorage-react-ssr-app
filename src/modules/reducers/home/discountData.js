
import {ACTIONTYPES} from '../../../configurations/actiontypes'

const INITIAL_STATE = {data: {}, error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
      
      case ACTIONTYPES.HOME.GET_ALL_DISCOUNTS:
      return { ...state, data: action.payload};
    
      default:
      return state;
    }
  }