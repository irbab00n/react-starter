import React from 'react';

import { Link } from 'react-router-dom';
import JumbotronSlide from './JumbotronSlide';
import SlideSelectorList from './SlideSelectorList';

const slides = [
  {
    feature: (show) => (
      <div className={`jumbotron-slide-container ${show ? 'show' : ''} ac jc`}>
        <a><button className="large-font">Button 1</button></a>
        <a><button className="large-font">Button 2</button></a>
        <a><button className="large-font">Button 3</button></a>
      </div>
    ),
    backgroundColor: '#0F6DB4',
    subtitle: 'Example sub-title',
    title: 'Example Title',
    textWhite: true
  },
  {
    feature: (show) => (
      <div className={`jumbotron-slide-container ${show ? 'show' : ''} ac jc`}>
        <a><button className="large-font">Action Button</button></a>
      </div>
    ),
    backgroundColor: '#82B74F',
    subtitle: 'Place your advertisement here!',
    title: 'Are you selling something?',
    textWhite: false
  },
  {
    feature: (show) => (
      <div className={`jumbotron-slide-container ${show ? 'show' : ''} ac jc`}>
        <a><button className="large-font">Action Button 2</button></a>
      </div>
    ),
    backgroundColor: '#EE6534',
    subtitle: 'Place your advertisement here!',
    title: 'Are you selling something?',
    textWhite: false
  },
];

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      fadeOut: false
    };
    this.formatSlides = this.formatSlides.bind(this);
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
  }

  formatSlides(currentIndex, fadeOut) {
    return slides.map((slide, index) => {
      return (
        <JumbotronSlide
          currentIndex={currentIndex}
          fadeOut={fadeOut}
          slide={slide}
        />
      );
    });
  }

  setBackgroundColor(slide) {
    return {"backgroundColor": slide.backgroundColor};
  }

  setCurrentIndex(index) {
    const { currentIndex } = this.state;
    if (index === currentIndex) {
      return;
    }

    this.setState({
      fadeOut: true
    }, () => {
      setTimeout(() => {
        this.setState({
          currentIndex: index,
          fadeOut: false
        });
      }, 200);
    });
  }

  render() {
    const { currentIndex, fadeOut } = this.state;
    /*
      This method invocation is using a locally created 'slides' collection.
      If the 'slides' array is removed from this file and stored externally,
      We will need to do 1 of 2 things:
        1. Pass the slides in as an argument to 'formatSlides'
        2. Extract the slides from the props
    */
    let formattedSlides = this.formatSlides(currentIndex, fadeOut);

    return (
      <section className={`jumbotron-wrapper`} style={this.setBackgroundColor(slides[currentIndex])}>
        <div className="jumbotron-inner-wrapper">
          {
            formattedSlides[currentIndex]
          }
          <SlideSelectorList
            currentIndex={currentIndex}
            setCurrentIndex={this.setCurrentIndex}
            slides={slides}
          />
        </div>
      </section>
    );

  }
};