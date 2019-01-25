import React from 'react';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../../redux/dispatchMappedActions';

import MostRecent from './MostRecent';

class BlogSideTrack extends React.Component {
  constructor(props) {
    super(props);
    this.buildCategoriesList = this.buildCategoriesList.bind(this);
    this.buildTagsList = this.buildTagsList.bind(this);
  }

  buildCategoriesList() {
    const {  } = this.props.views.blog.categories.storage
  }

  buildTagsList() {

  }

  render() {

    return (

      <div id="blog-side-track">
        <MostRecent />
        <div className="inner-wrapper categories-wrapper">
          Categories
        </div>
        <div className="inner-wrapper tags-wrapper">
          Tags
        </div>
      </div>

    );

  }
};

const ConnectedBlogSideTrack = connect(
  state => state,
  dispatchMappedActions
)(BlogSideTrack);

export default ConnectedBlogSideTrack;