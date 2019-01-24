import * as types from '../../types';
import butter from '../../../config/buttercms';

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


export const fetchBlogPostsByPage = (page) => {
  return dispatch => {
    // console.log('fetch blog posts');
    dispatch(setBlogPostsFetchingAction(true));
    dispatch(setBlogPostsFetchedAction(false));
    butter.post.list({page: page, page_size: 10})
      .then(response => {
        // console.log('response: ', response);
        dispatch(setBlogPostsFetchingAction(false));
        dispatch(setBlogPostsFetchedAction(true));
        dispatch(setBlogPostsAction(response.data));
      })
      .catch(error => {
        console.log('something went wrong while fetching blog posts: ', error);
        dispatch(setBlogPostsErrorAction(true));
        dispatch(setBlogPostsErrorMessageAction(error));
      });
  };
};