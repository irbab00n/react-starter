import React from 'react';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../../redux/dispatchMappedActions';

class Tags extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="inner-wrapper tags-wrapper">
        Tags
      </div>

    );

  }
}

const ConnectedTags = connect(
  state => state,
  dispatchMappedActions
)(Tags);

export default ConnectedTags;