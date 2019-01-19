import React from 'react';
import { IndexRoute, Route, Switch } from 'react-router';

import BlogHome from '../components/Blog/BlogHome';
import BlogPost from '../components/Blog/BlogPost';

const Blog = (props) => (
  <main className="blog-page-layout">
    <Switch>
      <Route exact path={props.match.url} component={BlogHome} />
      <Route path={`${props.match.url}/p/:page`}  component={BlogHome} />
      <Route path={`${props.match.url}/post/:slug`} component={BlogPost} />
    </Switch>
  </main>
);

export default Blog;