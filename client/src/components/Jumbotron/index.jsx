import React from 'react';

import JumbotronSlide from './JumbotronSlide';
import SlideSelectorList from './SlideSelectorList';

const slides = [
  {
    subtitle: 'I like to build things',
    title: 'My name is Thomas Cosby'
  },
  {
    subtitle: 'See what I\'ve been working on',
    title: 'My Projects'
  },
  {
    subtitle: 'See what\'s been on my mind',
    title: 'My blog'
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
          subtitle={slide.subtitle}
          title={slide.title}
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
    console.log('setting the jumbotron index to: ', index);
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

    console.log(formattedSlides);

    return (
      <div className={`jumbotron-wrapper ${this.setBackgroundColor(currentIndex)}`}>
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
      </div>
    );

  }
};