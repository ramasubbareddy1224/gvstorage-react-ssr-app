
import {ACTIONTYPES} from '../../configurations/actiontypes'

const INITIAL_STATE = {moveInCharges: [], selectedUnitInfo: {},  error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONTYPES.RESERVE.GET_ALL_MOVEIN_CHARGES:
          return { ...state, moveInCharges: Object.assign({},action.payload)};
        case ACTIONTYPES.RESERVE.GET_SELECTED_UNIT_INFO:
          return { ...state, 
            selectedUnitInfo:Object.assign({},action.payload)};

      default:
      return state;
    }
  }
