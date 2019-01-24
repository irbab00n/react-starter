import React from 'react';

export default class BlogSideTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div id="blog-side-track">
        <div className="inner-wrapper">
          Most Recent
        </div>
        <div className="inner-wrapper">
          Categories
        </div>
        <div className="inner-wrapper">
          Tags
        </div>
        <div className="inner-wrapper">
          Post Date
        </div>
      </div>

    );

  }
};