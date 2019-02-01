import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import discountData from '../modules/reducers/home/discountData';
import pinCodeData from '../modules/reducers/home/pinCodeData';
import siteData from '../modules/reducers/home/siteData';
import homePageData from '../modules/reducers/home.reducer';
import searchPageData from '../modules/reducers/search.reducer';
import commonData from '../modules/reducers/common.reducer';
import selfStorageData from '../modules/reducers/self-storage.reducer';
import reserveData from '../modules/reducers/reserve.reducer';
import rentData from '../modules/reducers/rent.reducer';
import { loadingBarReducer } from 'react-redux-loading-bar'
export default combineReducers({
  auth,
  profile,
  discountData,
  pinCodeData,
 // siteData,
  homePageData,
  searchPageData,
  commonData,
  selfStorageData,
  reserveData,
  rentData,
  loadingBar: loadingBarReducer
});
