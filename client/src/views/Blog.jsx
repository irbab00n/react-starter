import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import BlogMain from '../components/Blog/BlogMain';
import BlogList from '../components/Blog/BlogList';
import BlogPost from '../components/Blog/BlogPost';

const Blog = (props) => (
  <main className="blog-page-layout">
    <Switch>
      <Route exact path={props.match.url} component={BlogMain} />
      <Route path={`${props.match.url}/p/:page`}  component={BlogList} />
      <Route exact path={`${props.match.url}/post`} render={() => (
        /* Since cosbytes.com/blog/post returns nothing, redirect it back to the blog main url */
        <Redirect to={props.match.url}/>
      )} />
      <Route path={`${props.match.url}/category/:category`}  component={BlogList} />
      <Route path={`${props.match.url}/tag/:tag`}  component={BlogList} />

      <Route path={`${props.match.url}/post/:slug`} component={BlogPost} />
    </Switch>
  </main>
);

export default Blog;