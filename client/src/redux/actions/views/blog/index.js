import * as blogCategoriesActions from './blog_categories_actions';
import * as blogPostsActions from './blog_posts_actions';

const actions = Object.assign(
  {},
  blogCategoriesActions,
  blogPostsActions
);

export default actions;
