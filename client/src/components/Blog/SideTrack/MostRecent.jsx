import React from 'react';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../../redux/dispatchMappedActions';

class MostRecent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (

      <div className="inner-wrapper most-recent-wrapper">
        Most Recent
      </div>

    );

  }
}

const ConnectedMostRecent = connect(
  state => state,
  dispatchMappedActions
)(MostRecent);

export default ConnectedMostRecent;