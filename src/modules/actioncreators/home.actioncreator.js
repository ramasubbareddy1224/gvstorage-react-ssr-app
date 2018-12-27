import "isomorphic-fetch";
import wretch from "wretch"
import {Environment} from '../../configurations/environment';
import {ACTIONTYPES} from '../../configurations/actiontypes';
import { ApiRequest } from '../../utility' ;

const getAllDiscounts = discounts => ({ type: ACTIONTYPES.HOME.GET_ALL_DISCOUNTS, payload: discounts });


export const getDiscounts = () => (dispatch) => {
    // return fetch(`${Environment.MW_END_POINT_URL}/api/NOP/Discount/GetAllDiscounts`)
    //   .then(response => response.json())
    //   .then(data => dispatch(getAllDiscounts(data)))
    return ApiRequest.url(`/NOP/Discount/GetAllDiscounts`)
    .get()
    .json(json=>dispatch(getAllDiscounts(json)));
  };

