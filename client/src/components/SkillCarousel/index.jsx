import React from 'react';
import { isMobile } from 'react-device-detect';

import SkillCard from './SkillCard';
import Control from './Control';


export default class SkillCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.calculateXTranslate = this.calculateXTranslate.bind(this);
    this.updateCarouselIndex = this.updateCarouselIndex.bind(this);
  }

  /* calculateXTranslate info --
    Params:
      index <Number>: Used to calcuate the number of % sections to shift by
    Purpose:
      Uses the index as a multiplier for how many card-sized sections to translate the slider by
      index = 3 => transform = 100%
      index = 1 => transform = 33.3333%
  */
  calculateXTranslate(index, sizeDivision) {
    let cardSize = 100 / sizeDivision;
    let transformPercent = cardSize * index;
    return {transform: `translateX(${-transformPercent}%)`};
  }

  renderSkillsCarousel(index) {
    const { skills } = this.props;
    var isPortrait = window.innerHeight > window.innerWidth;

    let sizeDivision = 3; // default is 3

    console.log('is mobile? ', isMobile);
    console.log('is portrait? ', isPortrait);

    isMobile ? sizeDivision = 2 : null;
    isPortrait ? sizeDivision = 1 : null;

    let classList = `skill-carousel-container`;

    return (
      <div 
        className={classList}
        style={this.calculateXTranslate(index, sizeDivision)}
      >
        {
          skills.map((skill, index) => {
            return (
              <SkillCard 
                isMobile={isMobile}
                isPortrait={isPortrait}
                key={`skill-${index}`}
                skill={skill}
              />
            );
          })
        }
      </div>
    );
  }

  /* updateCarouselIndex info --
    Params:
      update <String>: A command used to determine how to mutate the index in state
    Purpose:
      create a central updating function responsible for either increasing or decreasing the index
  */
  updateCarouselIndex(e, update) {
    e.preventDefault();
    const { skills } = this.props;
    let { index } = this.state;
    let isPortrait = window.innerHeight > window.innerWidth;

    let limitValue = 3;

    isMobile ? limitValue = 2 : null; // only allows 2 tiles in mobile landscape
    isPortrait ? limitValue = 1 : null; // only allows 1 tile in mobile portrait

    switch (update) {
      case 'inc':
        if (index === skills.length - limitValue) {
          return;
        }
        this.setState({index: index + 1});
        break;
      case 'dec':
        if (index === 0) {
          return;
        }
        this.setState({index: index - 1});
        break;
      default:
        // if neither command was supplied, do nothing
        console.log(`updateCarouselIndex ran, but didn't receive a valid update command as its input`);
        break;
      }
    }

  render() {
    const { index } = this.state;

    return (
      
      <section id="skill-carousel">
        <div className="skill-carousel-wrapper">
          {
            this.renderSkillsCarousel(index)
          }
          <div className={`skill-carousel-container skill-control-box`}>
            <Control
              // isMobile={isMobile} 
              // height={height}
              direction={'left'}
              updateFunction={this.updateCarouselIndex}
            />          
            <Control
              // isMobile={isMobile} 
              // height={height}
              direction={'right'}
              updateFunction={this.updateCarouselIndex}
            />
          </div>
        </div>
      </section>

    );

  }
}