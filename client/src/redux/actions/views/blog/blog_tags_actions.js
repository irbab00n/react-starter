import * as types from '../../../types';
import butter from '../../../../config/buttercms';

/* SET BLOG TAGS FETCHING ACTION */
const setBlogTagsFetchingAction = (flag) => ({
  type: types.SET_BLOG_TAGS_FETCHING,
  payload: {
    flag
  }
});

/* SET BLOG TAGS FETCHED ACTION */
const setBlogTagsFetchedAction = (flag) => ({
  type: types.SET_BLOG_TAGS_FETCHED,
  payload: {
    flag
  }
});

/* SET BLOG TAGS ACTION */
const setBlogTagsAction = (tags) => ({
  type: types.SET_BLOG_TAGS,
  payload: {
    tags
  }
});

/* SET BLOG TAGS ERROR ACTION */
const setBlogTagsErrorAction = (flag) => ({
  type: types.SET_BLOG_TAGS_ERROR,
  payload: {
    flag
  }
});

/* SET BLOG TAGS ERROR MESSAGE ACTION */
const setBlogTagsErrorMessageAction = (message) => ({
  type: types.SET_BLOG_TAGS_ERROR_MESSAGE,
  payload: {
    message
  }
});


export const fetchBlogTags = () => {
  return dispatch => {
    // console.log('fetch blog tags');
    dispatch(setBlogTagsFetchingAction(true));
    dispatch(setBlogTagsFetchedAction(false));
    butter.tag.list()
      .then(response => {
        console.log('response: ', response);
        dispatch(setBlogTagsFetchingAction(false));
        dispatch(setBlogTagsFetchedAction(true));
        dispatch(setBlogTagsAction(response.data.data));
      })
      .catch(error => {
        console.log('something went wrong while fetching blog tags: ', error);
        dispatch(setBlogTagsErrorAction(true));
        dispatch(setBlogTagsErrorMessageAction(error));
      });
  };
};