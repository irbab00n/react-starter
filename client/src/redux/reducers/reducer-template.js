import * as types from '../types';

const INITIAL_STATE = () => ({
  /* STATE HERE */
});

const placeholderReducer = (state = new INITIAL_STATE(), action) => {
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    default:
      return newState;
  }

};

export default placeholderReducer;