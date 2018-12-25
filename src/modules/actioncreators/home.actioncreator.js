import "isomorphic-fetch";
import {Environment} from '../../configurations/environment';
import {ACTIONTYPES} from '../../configurations/actiontypes';


const getAllDiscounts = discounts => ({ type: ACTIONTYPES.HOME.GET_ALL_DISCOUNTS, payload: discounts });


export const getDiscounts = () => (dispatch) => {
    return fetch(`${Environment.MW_END_POINT_URL}/api/NOP/Discount/GetAllDiscounts`)
      .then(response => response.json())
      .then(data => dispatch(getAllDiscounts(data)))
  };

