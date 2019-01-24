import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // Create post categories

  // Create post tags


  render() {
    const { match, post } = this.props;

    return (
      <Link to={`${match.url}/post/${post.slug}`} key={post.slug} className="inner-wrapper blog-list-item">
        <div className="image" style={{background: `url(${post.featured_image})`}}/>
        <h4>{post.title}</h4>
        <p>{post.summary}</p>
        <div className="categories-wrapper">
          
        </div>
      </Link>
    );

  }
};