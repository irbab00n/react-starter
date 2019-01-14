import React from 'react';
import ReactDOM from 'react-dom';

export default class Control extends React.Component {
  constructor(props) {
    super(props);
    this.renderControlType = this.renderControlType.bind(this);
  }

  componentDidMount() {
    let { direction, isMobile, updateFunction } = this.props;
    let update = 'dec';

    direction === 'right' ? update = 'inc' : null;

    ReactDOM.findDOMNode(this).addEventListener(
      isMobile ?
        'touchend' :
        'click', e => updateFunction(e, update), {passive: false});
  }

  componentWillUnmount() {
    let { direction, isMobile, updateFunction } = this.props;
    let update = 'dec';

    direction === 'right' ? update = 'inc' : null;

    ReactDOM.findDOMNode(this).removeEventListener(
      isMobile ?
        'touchend' :
        'click', e => updateFunction(e, update), {passive: false});
  }

  renderControlType() {
    let { direction, height } = this.props;
    let tag = 10094;

    direction === 'right' ? tag = 10095 : null;

    return (
      <div className={`about-${height}-ch control control-${direction} no-select`}>
        {String.fromCharCode(tag)}
      </div>
    );
  }

  render() {
    return this.renderControlType();
  }
}