import pekka from '../app/assets/pekka.jpg';
import arvidsson from '../app/assets/arvidsson.jpg';
import {ACTIONTYPES} from '../configurations/actiontypes';


const initialState = {
  currentProfile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONTYPES.PROFILE.SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.profile
      };

    default:
      return state;
  }
};

export const getCurrentProfile = id => dispatch =>
  new Promise(resolve => {
    setTimeout(() => {
      let profile;

      if (id === 1) {
        profile = {
          id,
          name: 'Pekka Rinne',
          image: pekka
        };
      } else {
        profile = {
          id,
          name: 'Viktor Arvidsson',
          image: arvidsson
        };
      }

      dispatch({
        type: ACTIONTYPES.PROFILE.SET_CURRENT_PROFILE,
        profile
      });

      resolve(profile);
    }, 3000);
  });

export const removeCurrentProfile = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: ACTIONTYPES.PROFILE.SET_CURRENT_PROFILE,
      profile: {}
    });

    resolve({});
  });
