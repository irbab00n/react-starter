import React, { Component } from 'react';
import Butter from 'buttercms'
import { Helmet } from "react-helmet";

const butter = Butter('99e3c38507f191c5f64f0fc1dd27369ef8bda69e');

export default class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let slug = this.props.match.params.slug;

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      console.log('post object: ', post);

      return (
        <section id="blog-list" className="blog-view-wrapper">

          <div id="blog-title" className="inner-wrapper blog-title-wrapper">
            <Helmet>
              <title>{post.seo_title}</title>
              <meta name="description" content={post.meta_description} />
              <meta name="og:image" content={post.featured_image} />
            </Helmet>
            <h1>{post.title}</h1>
          </div>

          <div id="blog-meta" className="inner-wrapper blog-meta-wrapper">
            <div>Meta Title Block</div>
            <div>Social Share Block</div>
          </div>

          <div id="blog-content" className="inner-wrapper blog-content-wrapper">
            <div id="blog-main-track"
              dangerouslySetInnerHTML={{__html: post.body}}
            />
            <div id="blog-side-track">Side Track</div>
          </div>

          <div className="blog-bottom-spacer"/>
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