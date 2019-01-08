import React from 'react';

export default class SkillCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientationListener: false
    };
    this.buildClassList = this.buildClassList.bind(this);
    this.calculateCardWidth = this.calculateCardWidth.bind(this);
  }

  buildClassList(isPortrait, isMobile) {
    let heightString = 'about-half-ch'; // default size is half content height
    isMobile ? heightString = 'about-full-ch' : null;
    isPortrait ? heightString = 'about-half-ch' : null;
    // isMobile is about-full-ch skillcard
    // isPortrait is about-half-ch skillcard
    return `${heightString} skill-card`;
  }

  calculateCardWidth(isPortrait, isMobile) {
    let finalWidth = 100 / 3; // starts off at 33.3333%
    // isMobile ? finalWidth = 50 : null; // if mobile, default to 50% for landscape
    // isPortrait ? finalWidth = 100 : null; // if portrait, set width to 100%
    return {minWidth: `${finalWidth}%`};
  }

  render() {

    // let { isPortrait, isMobile } = this.props;
    let { description, image, title } = this.props.skill;

    // console.log('built class list: ', this.buildClassList(isPortrait, isMobile));
    // console.log('calculated card width: ', this.calculateCardWidth(isPortrait, isMobile));

    return (
      <div className={`skill-card`}>
        <h2 className="skill-card-title no-select">{title}</h2>
        <img src={image} className="skill-card-image"/>
        <center className="skill-card-description">
          {
            description.split('*').map((line, index) => {
              return (
                <span
                  key={`${title.toLowerCase()}-description-line-${index}`}
                  className="no-select"
                >
                  {line}
                </span>
              );
            })
          }
        </center>
      </div>
    );
  }
}

// style={this.calculateCardWidth(isPortrait, isMobile)}