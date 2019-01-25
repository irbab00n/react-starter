import * as types from '../../../types';
import butter from '../../../../config/buttercms';

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


export const fetchBlogPostsWithConfig = (config) => {
  const pageSizeLimit = 10;

  const configCache = {
    category: (category) => ({category_slug: category}),
    page: (page) => ({page: page, page_size: pageSizeLimit}),
    tag: (tag) => ({tag_slug: tag})
  };

  var configList = Object.keys(config).map(key => {
    return configCache[key](config[key]);
  });

  var builtConfig = configList.reduce((prev, next) => {
    return Object.assign(prev, next);
  }, {});

  // console.log(builtConfig);

  // category - {category_slog: category}
  // tag      - {tag_slug: tag}
  // page     - {page: page, page_size: pageSizeLimit}

  return dispatch => {
    // console.log('fetch blog posts');
    dispatch(setBlogPostsFetchingAction(true));
    dispatch(setBlogPostsFetchedAction(false));
    butter.post.list(builtConfig)
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