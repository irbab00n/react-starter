import React from 'react';

import { Link } from 'react-router-dom';
import JumbotronSlide from './JumbotronSlide';
import SlideSelectorList from './SlideSelectorList';

const slides = [
  {
    feature: (show) => (
      <div className={`jumbotron-slide-container ${show ? 'show' : ''} ac jc`}>
        <a href="https://github.com/irbab00n" target="_blank"><button><img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/github_logo.png"/></button></a>
        <a href="https://www.linkedin.com/in/cosbyts/" target="_blank"><button><img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/linkedin_logo.png"/></button></a>
        <a href="https://s3-us-west-1.amazonaws.com/cos-bytes.com/resume.pdf" target="_blank"><button className="large-font">Resume</button></a>
      </div>
    ),
    subtitle: 'I like to build things',
    title: 'My name is Thomas Cosby',
    textWhite: true
  },
  {
    feature: (show) => (
      <div className={`jumbotron-slide-container ${show ? 'show' : ''} ac jc`}>
        <Link to="/projects"><button className="large-font">Projects</button></Link>
      </div>
    ),
    subtitle: 'See what I\'ve been working on',
    title: 'My Projects',
    textWhite: false
  },
  {
    feature: () => (null),
    subtitle: 'See what\'s been on my mind',
    title: 'My blog',
    textWhite: false
  }
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

  setBackgroundColor(index) {
    switch (index) {
      case 1:
        return 'medium-bg';
      case 2:
        return 'darkest-bg';
      default:
        return 'default-bg';
    }
  }

  setCurrentIndex(index) {
    const { currentIndex } = this.state;
    if (index === currentIndex) {
      return;
    }

    // console.log('setting the jumbotron index to: ', index);
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

  // toggle on the show class, count the delay - 1x transition time, toggle off the hide class, change content

  render() {
    const { currentIndex, fadeOut } = this.state;
    let formattedSlides = this.formatSlides(currentIndex, fadeOut);

    return (
      <section className={`jumbotron-wrapper ${this.setBackgroundColor(currentIndex)}`}>
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