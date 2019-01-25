import * as types from '../../../types';
import butter from '../../../../config/buttercms';

/* SET BLOG CATEGORIES FETCHING ACTION */
const setBlogCategoriesFetchingAction = (flag) => ({
  type: types.SET_BLOG_CATEGORIES_FETCHING,
  payload: {
    flag
  }
});

/* SET BLOG CATEGORIES FETCHED ACTION */
const setBlogCategoriesFetchedAction = (flag) => ({
  type: types.SET_BLOG_CATEGORIES_FETCHED,
  payload: {
    flag
  }
});

/* SET BLOG CATEGORIES ACTION */
const setBlogCategoriesAction = (categories) => ({
  type: types.SET_BLOG_CATEGORIES,
  payload: {
    categories
  }
});

/* SET BLOG CATEGORIES ERROR ACTION */
const setBlogCategoriesErrorAction = (flag) => ({
  type: types.SET_BLOG_CATEGORIES_ERROR,
  payload: {
    flag
  }
});

/* SET BLOG CATEGORIES ERROR MESSAGE ACTION */
const setBlogCategoriesErrorMessageAction = (message) => ({
  type: types.SET_BLOG_CATEGORIES_ERROR_MESSAGE,
  payload: {
    message
  }
});


export const fetchBlogCategories = () => {
  return dispatch => {
    // console.log('fetch blog Categories');
    dispatch(setBlogCategoriesFetchingAction(true));
    dispatch(setBlogCategoriesFetchedAction(false));
    butter.category.list()
      .then(response => {
        // console.log('response: ', response);
        dispatch(setBlogCategoriesFetchingAction(false));
        dispatch(setBlogCategoriesFetchedAction(true));
        dispatch(setBlogCategoriesAction(response.data.data));
      })
      .catch(error => {
        console.log('something went wrong while fetching blog Categories: ', error);
        dispatch(setBlogCategoriesErrorAction(true));
        dispatch(setBlogCategoriesErrorMessageAction(error));
      });
  };
};