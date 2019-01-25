import * as types from '../../../types';
import butter from '../../../../config/buttercms';

/* SET BLOG MOST RECENT FETCHING ACTION */
const setBlogMostRecentFetchingAction = (flag) => ({
  type: types.SET_BLOG_MOST_RECENT_FETCHING,
  payload: {
    flag
  }
});

/* SET BLOG MOST RECENT FETCHED ACTION */
const setBlogMostRecentFetchedAction = (flag) => ({
  type: types.SET_BLOG_MOST_RECENT_FETCHED,
  payload: {
    flag
  }
});

/* SET BLOG MOST RECENT ACTION */
const setBlogMostRecentAction = (post) => ({
  type: types.SET_BLOG_MOST_RECENT,
  payload: {
    post
  }
});

/* SET BLOG MOST RECENT ERROR ACTION */
const setBlogMostRecentErrorAction = (flag) => ({
  type: types.SET_BLOG_MOST_RECENT_ERROR,
  payload: {
    flag
  }
});

/* SET BLOG MOST RECENT ERROR MESSAGE ACTION */
const setBlogMostRecentErrorMessageAction = (message) => ({
  type: types.SET_BLOG_MOST_RECENT_ERROR_MESSAGE,
  payload: {
    message
  }
});


export const fetchBlogMostRecentPost = () => {
  return dispatch => {
    // console.log('fetch BLOG MOST RECENT');
    dispatch(setBlogMostRecentFetchingAction(true));
    dispatch(setBlogMostRecentFetchedAction(false));
    butter.post.list({page: 1, page_size: 1})
      .then(response => {
        console.log('response: ', response);
        dispatch(setBlogMostRecentFetchingAction(false));
        dispatch(setBlogMostRecentFetchedAction(true));
        dispatch(setBlogMostRecentAction(response.data.data[0]));
      })
      .catch(error => {
        console.log('something went wrong while fetching BLOG MOST RECENT: ', error);
        dispatch(setBlogMostRecentErrorAction(true));
        dispatch(setBlogMostRecentErrorMessageAction(error));
      });
  };
};