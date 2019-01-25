import * as blogCategoriesActions from './blog_categories_actions';
import * as blogPostsActions from './blog_posts_actions';
import * as blogTagsActions from './blog_tags_actions';
import * as mostRecentActions from './most_recent_actions';

const actions = Object.assign(
  {},
  blogCategoriesActions,
  blogPostsActions,
  blogTagsActions,
  mostRecentActions
);

export default actions;
