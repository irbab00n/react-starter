import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from 'react-device-detect';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
    
    if (fadeOut === true && fadeOut !== this.props.fadeOut) {
      updatedState.showContent = false;
    }

    if (currentIndex !== this.props.currentIndex) {
      updatedState.showContent = true;
      ReactDOM.findDOMNode(this).scrollTop = 0;
    }

    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState);
    }

    return true;
  }

  buildTechLabelImages(images) {
    return images.map((image, index) => {
      return (
        <li key={`tech-label-image-${index}`}>{image}</li>
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

        <div className="inner-wrapper full-width jcc dark-bg no-padding">
          {this.renderCarousel(project.pictures)}
        </div>

       

        <div className="inner-wrapper no-padding">
          <div className="project-split-wrapper">
            <div className="project-links-wrapper">
              <div className="link-line"><i className="fas fa-link"></i><span>{project.link}</span></div>
              <div className="link-line"><i className="fab fa-github"></i><span>{project.repo}</span></div>
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