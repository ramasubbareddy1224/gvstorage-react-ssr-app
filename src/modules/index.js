import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import discountData from '../modules/reducers/home/discountData';
import pinCodeData from '../modules/reducers/home/pinCodeData';
import siteData from '../modules/reducers/home/siteData';
import homePageData from '../modules/reducers/home.reducer';
import searchPageData from '../modules/reducers/search.reducer';

export default combineReducers({
  auth,
  profile,
  discountData,
  pinCodeData,
 // siteData,
  homePageData,
  searchPageData
});
