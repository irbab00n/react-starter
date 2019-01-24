import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import BlogList from '../components/Blog/BlogList';
import BlogPost from '../components/Blog/BlogPost';

const Blog = (props) => (
  <main className="blog-page-layout">
    <Switch>
      <Route exact path={props.match.url} component={BlogList} />
      <Route path={`${props.match.url}/p/:page`}  component={BlogList} />
      <Route exact path={`${props.match.url}/post`} render={() => (
        /* Since cosbytes.com/blog/post returns nothing, redirect it back to the blog main url */
        <Redirect to={props.match.url}/>
      )} />
      <Route path={`${props.match.url}/post/:slug`} component={BlogPost} />
    </Switch>
  </main>
);

export default Blog;