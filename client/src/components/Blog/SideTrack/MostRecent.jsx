import React from 'react';
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

    console.log('most recent: ', mostRecent);
  
    return (

      <a className="inner-wrapper most-recent-wrapper" href={`/blog/post/${mostRecent.post.slug}`}>
        <h4>Most Recent Post</h4>
        <div className="image" style={{background: `url(${mostRecent.post.featured_image})`}}/>
        <span className="title">{mostRecent.post.title}</span>
      </a>

    );

  }
}

const ConnectedMostRecent = connect(
  state => state,
  dispatchMappedActions
)(MostRecent);

export default ConnectedMostRecent;