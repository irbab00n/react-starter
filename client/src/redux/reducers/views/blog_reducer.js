import * as types from '../types';

const INITIAL_STATE = () => ({
  categories: [],
  posts: [],
  tags: []
});

const blogReducer = (state = new INITIAL_STATE(), action) => {
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    /* CATEGORIES */
    case types.SET_BLOG_CATEGORIES:
      return newState;

    /* POSTS */
    case types.SET_BLOG_POSTS:
      return newState;
      
    /* TAGS */
    case types.SET_BLOG_TAGS:
      return newState;

    default:
      return newState;
  }

};

export default blogReducer;