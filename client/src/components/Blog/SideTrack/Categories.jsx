import React from 'react';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../../redux/dispatchMappedActions';

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="inner-wrapper categories-wrapper">
        Categories
      </div>

    );

  }
}

const ConnectedCategories = connect(
  state => state,
  dispatchMappedActions
)(Categories);

export default ConnectedCategories;