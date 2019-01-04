import * as types from '../types';

const INITIAL_STATE = {
  loginViewErrorMessage: '',
  isUserLoggedIn: false,
  rememberMeFlag: false
};

const placeholderReducer = (state = INITIAL_STATE, action) => {
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    default:
      return newState;
  }

};

export default placeholderReducer;