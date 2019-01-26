import React, { Component } from 'react';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../redux/dispatchMappedActions';
import { Helmet } from "react-helmet";

import BlogSideTrack from './SideTrack/';
import Footer from '../Footer/'

import areObjectsDeepEqual from '../../lib/helpers/areObjectsDeepEqual';


class BlogPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      lockSidebar: true
    };
    this.toggleSidebarLock = this.toggleSidebarLock.bind(this);
  }

  componentWillMount() {
    const { slug } = this.props.match.params;

    this.props.actions.retrieveBlogPostFromSlug(slug);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { loaded } = nextState;
    const { currentPost } = nextProps.views.blog;
    let updatedState = {};

    /* 
      If the match object changes, indicating the user changing the url 
      via a React Router Link, fetch posts for the new params 
    */
    if (!areObjectsDeepEqual(this.props.match, nextProps.match)) {
      this.props.actions.retrieveBlogPostFromSlug(nextProps.match.params.slug);
      updatedState.loaded = false;
    }

    if (currentPost.fetched && !currentPost.fetching && !loaded) {
      console.log('post fetched: ', currentPost);
      updatedState.loaded = true;
    }

    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState);
    }

    return true;
  }

  toggleSidebarLock() {
    this.setState({
      lockSidebar: !this.state.lockSidebar
    });
  }

  render() {
    const { loaded, lockSidebar } = this.state;
    const { post } = this.props.views.blog.currentPost;

    let postInState = Object.keys(post).length > 0;

    // console.log('post object: ', post);

    if (loaded && postInState) {
      return (
        <section id="blog-list" className="blog-view-wrapper">

          <div id="blog-title" className="inner-wrapper blog-title-wrapper">
            <Helmet>
              <title>{post.data.seo_title}</title>
              <meta name="description" content={post.data.meta_description} />
              <meta name="og:image" content={post.data.featured_image} />
            </Helmet>
            <h1>{post.data.title}</h1>
          </div>

          {/* 
            BLOG META BLOCK
            SOCIAL SHARE BLOCK

            Both of these blocks can find their information from the post.data.author prop
          */}
          <div id="blog-meta" className="inner-wrapper blog-meta-wrapper">
            <div>
              Meta Title Block
            </div>
            <div />
          </div>

          <div id="blog-content" className="inner-wrapper blog-content-wrapper">
            <div id="blog-main-track"
              dangerouslySetInnerHTML={{__html: post.data.body}}
            />

            {/* SIDE TRACK WILL BE MANAGED SEPERATELY */}
            <BlogSideTrack
              lockSidebar={lockSidebar}
              toggleSidebarLock={this.toggleSidebarLock}
            />
          </div>

          <div className="blog-bottom-spacer"/>

          <Footer />

        </section>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

const ConnectedBlogPost = connect(
  state => state,
  dispatchMappedActions
)(BlogPost);

export default ConnectedBlogPost;