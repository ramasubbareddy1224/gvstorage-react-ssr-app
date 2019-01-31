
import {ACTIONTYPES} from '../../configurations/actiontypes'

const INITIAL_STATE = {tenantInfo: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.RENT.GET_TENENT_INFO:
          return { ...state, tenantInfo: Object.assign({},action.payload)};       
      default:
      return state;
    }
  }
