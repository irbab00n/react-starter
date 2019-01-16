import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from 'react-device-detect';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const images = {
  'aws': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/aws-ec2.png',
  'express': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/express-bw-200.png',
  'heroku': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/heroku-500.png',
  'js': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/jsLogo_619x619.jpg',
  'node': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/nodejs-512.png',
  'postgres': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/postgres.png',
  'react': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/react_512x512.png',
  'react-router': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/react-router.png',
  'sass': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/sass-256.png',
  'webpack': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/webpack.png'
};

export default class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: window.innerHeight > window.innerWidth,
      rerender: false,
      showContent: false
    };
    this.buildTechLabelImages = this.buildTechLabelImages.bind(this);
    this.buildImageCarouselElements = this.buildImageCarouselElements.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
  }

  componentDidMount() {
    if ('onorientationchange' in window) {
      window.addEventListener("orientationchange", () => {
        this.setState({
          isPortrait: !this.state.isPortrait
        });
        console.log("onorientationchange");
      }, false);
    }
    // } else if ('onresize' in window) {
    //     window.addEventListener("resize", () => {
    //       this.setState({
    //         isPortrait: !this.state.isPortrait
    //       });
    //       console.log("resize");
    //     }, false);
    // }

    setTimeout(() => {
      this.setState({showContent: true});
    } , 400);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { currentIndex, fadeOut } = nextProps;
    let updatedState = {};
    
    // If the fadeOut from the parent toggles true
    if (fadeOut === true && fadeOut !== this.props.fadeOut) {
      updatedState.showContent = false; // toggle off the content
    }

    // If the currentIndex from the parent changes
    if (currentIndex !== this.props.currentIndex) {
      updatedState.showContent = true; // toggle the content on
      ReactDOM.findDOMNode(this).scrollTop = 0; // scroll the element back to the top
    }

    // Detects if state needs to be updated
    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState);
    }

    // Component will always re-render when props change
    return true;
  }

  /* Goes through the tags and matches the appropriate image for the tag */
  buildTechLabelImages(imageTags) {
    return imageTags.map((imageTag, index) => {
      return (
        <li key={`tech-label-image-${index}`}>
          {/* Look up the tag in the image cache, pull out the url, set as img src */}
          <img src={images[imageTag]}/>
        </li>
      );
    });
  }

  buildImageCarouselElements(pictures) {
    const { isPortrait } = this.state; 
    return pictures.map((picture, index) => {
      return (
        <div key={`image-carousel-image-${index}`}>
          <img src={picture.link} />
          {
            isPortrait ?
              null :
              <p className="legend">{picture.description}</p>
          }
        </div>
      );
    });
  }

  renderCarousel(pictures) {
    const { isPortrait } = this.state;
    let width = isMobile ? '680px' : '980px';
    isMobile && isPortrait ? width = '360px' : null;

    return (
      <Carousel
        showThumbs={false}
        width={width}
      >
        {
          this.buildImageCarouselElements(pictures)
        }
      </Carousel >
    );
  }

  render() {
    const { isPortrait, showContent } = this.state;
    const { project } = this.props;
    
    return (
      <section className={`main-track ${showContent ? 'show' : ''}`}>
      
        <div className="inner-wrapper no-padding">
          <div className={`project-title-wrapper no-padding ${isPortrait ? 'col' : ''}`}>
            <h1>{project.title}</h1>
            <ul className="project-tech-wrapper">
              {
                this.buildTechLabelImages(project.stack)
              }
            </ul>
          </div>
        </div>

        <div className="inner-wrapper full-width jcc light-bg no-padding">
          {this.renderCarousel(project.pictures)}
        </div>

       

        <div className="inner-wrapper no-padding">
          <div className="project-split-wrapper">
            <div className="project-links-wrapper">
              <div className="link-line"><i className="fas fa-link"></i><a href={project.link}>{project.link}</a></div>
              <div className="link-line"><i className="fab fa-github"></i><a href={project.repo}>{project.repo}</a></div>
            </div>
            <div className="project-contributors-wrapper">
              {project.contributors}
            </div>
          </div>
        </div>

        <div className="inner-wrapper no-padding">
          <div className="project-description-wrapper">
            {project.description}
          </div>
        </div>

      </section>
    );

  }
}