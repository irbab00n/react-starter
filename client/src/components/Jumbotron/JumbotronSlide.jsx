import React from 'react';

export default class JumbotronSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubtitle: false,
      showTitle: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSubtitle: true,
        showTitle: true
      })
    }, 200);
  }

  shouldComponentUpdate(nextProps) {
    /* If the fade out from the parent is true, and it was just switched to true */
    if (nextProps.fadeOut === true && nextProps.fadeOut !== this.props.fadeOut) {
      this.setState({
        showSubtitle: false,
        showTitle: false
      });
    }

    if (nextProps.currentIndex !== this.props.currentIndex) {
      this.setState({
        showSubtitle: true,
        showTitle: true
      });
    }

    return true;
  }

  render() {
    const { showSubtitle, showTitle } = this.state;
    const { subtitle, title } = this.props;
    
    return (
      <div className="jumbotron-slide-wrapper">
        <h1 className={`${showTitle ? 'show' : ''}`}>
          {title}
        </h1>
        <h4 className={`${showSubtitle ? 'show' : ''}`}>
          {subtitle}
        </h4>
      </div>
    );
  }
}