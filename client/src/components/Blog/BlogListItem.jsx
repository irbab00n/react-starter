import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogListItem extends React.Component {
  constructor(props) {
    super(props);
    this.buildPostCategories = this.buildPostCategories.bind(this);
    this.buildPostTags = this.buildPostTags.bind(this);
  }

  /**
   * Constructs the post categories list elements
   * @param {Array} categories - Array of category objects
   * 
   * @todo - Add feature that allows user to click on the category to change the category filter
   */
  buildPostCategories(categories) {
    return (
      <ul>
        {
          categories.map((category, index) => {
            return (
              <li key={`post-category-${index}`}>
                {category.name}
              </li>
            );
          })
        }
      </ul>
    );
  }

  /**
   * Constructs the post tags list elements
   * @param {Array} tags - Array of tag objects
   *
   * @todo - Add feature that allows user to click on the tag to change the tag filter
   * 
   */
  buildPostTags(tags) {
    return (
      <ul>
        {
          tags.map((tag, index) => {
            return (
              <li key={`post-tag-${index}`}>
                {tag.name}
              </li>
            );
          })
        }
      </ul>
    );
  }


  render() {
    const { match, post } = this.props;

    return (
      <Link to={`/blog/post/${post.slug}`} key={post.slug} className="inner-wrapper blog-list-item">
        <div className="image" style={{background: `url(${post.featured_image})`}}/>
        <h4>{post.title}</h4>
        <p>{post.summary}</p>
        <div className="published-wrapper">
          <span className="title">Published:</span><span>{new Date(post.published).toLocaleDateString()}</span>
        </div>
        <div className="categories-wrapper">
          {
            post.categories.length > 0 ?
              <span className="title">Categories</span> :
              null   
          }
          {
            this.buildPostCategories(post.categories)
          }
        </div>
        <div className="tags-wrapper">
          {
            post.tags.length > 0 ?
              <span className="title">Tags</span> :
              null   
          }
          {
            this.buildPostTags(post.tags)
          }
        </div>
      </Link>
    );

  }
};