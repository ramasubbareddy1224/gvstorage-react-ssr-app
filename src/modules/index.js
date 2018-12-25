import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import discountData from '../modules/reducers/home/discountData';

export default combineReducers({
  auth,
  profile,
  discountData
});
