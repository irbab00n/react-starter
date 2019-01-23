import React from 'react';
import { IndexRoute, Route, Switch } from 'react-router';

import BlogList from '../components/Blog/BlogList';
import BlogPost from '../components/Blog/BlogPost';

const Blog = (props) => (
  <main className="blog-page-layout">
    <Switch>
      <Route exact path={props.match.url} component={BlogList} />
      <Route path={`${props.match.url}/p/:page`}  component={BlogList} />
      <Route path={`${props.match.url}/post/:slug`} component={BlogPost} />
    </Switch>
  </main>
);

export default Blog;