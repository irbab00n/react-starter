import React from 'react';
import { Link } from 'react-router-dom';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../../redux/dispatchMappedActions';

class MostRecent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchBlogMostRecentPost();
  }

  render() {
    const { mostRecent } = this.props.views.blog.sidetrack;
  
    return (

      <Link className="inner-wrapper most-recent-wrapper" to={`/blog/post/${mostRecent.post.slug}`}>
        <h4>Most Recent Post</h4>
        <div className="image" style={{background: `url(${mostRecent.post.featured_image})`}}/>
        <span className="title">{mostRecent.post.title}</span>
      </Link>

    );

  }
}

const ConnectedMostRecent = connect(
  state => state,
  dispatchMappedActions
)(MostRecent);

export default ConnectedMostRecent;