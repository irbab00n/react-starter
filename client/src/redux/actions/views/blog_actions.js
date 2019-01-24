import * as types from '../../types';
import Butter from 'buttercms';

/* THIS IS AN API KEY, REFACTOR TO NON-LOCAL USE ASAP */
const butter = Butter('99e3c38507f191c5f64f0fc1dd27369ef8bda69e');

/* SET BLOG POSTS FETCHING ACTION */
const setBlogPostsFetchingAction = (flag) => ({
  type: types.SET_BLOG_POSTS_FETCHING,
  payload: {
    flag
  }
});

/* SET BLOG POSTS FETCHED ACTION */
const setBlogPostsFetchedAction = (flag) => ({
  type: types.SET_BLOG_POSTS_FETCHED,
  payload: {
    flag
  }
});

/* SET BLOG POSTS ACTION */
const setBlogPostsAction = (posts) => ({
  type: types.SET_BLOG_POSTS,
  payload: {
    posts
  }
});

/* SET BLOG POSTS ERROR ACTION */
const setBlogPostsErrorAction = (flag) => ({
  type: types.SET_BLOG_POSTS_ERROR,
  payload: {
    flag
  }
});

/* SET BLOG POSTS ERROR MESSAGE ACTION */
const setBlogPostsErrorMessageAction = (message) => ({
  type: types.SET_BLOG_POSTS_ERROR_MESSAGE,
  payload: {
    message
  }
});


export const fetchBlogPosts = (page) => {
  return dispatch => {
    dispatch(setBlogPostsFetchingAction(true));
    dispatch(setBlogPostsFetchedAction(false));
    console.log('fetch blog posts');
    butter.post.list({page: page, page_size: 10})
      .then(response => {
        console.log('response: ', response);
        dispatch(setBlogPostsFetchingAction(false));
        dispatch(setBlogPostsFetchedAction(true));
        dispatch(setBlogPostsAction(response.data));
      })
      .catch(error => {
        console.log('something went wrong during posts fetch: ', error);
        dispatch(setBlogPostsErrorAction(true));
        dispatch(setBlogPostsErrorMessageAction(error));
      });
  };
};