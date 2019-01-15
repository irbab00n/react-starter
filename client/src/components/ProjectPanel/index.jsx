import React from 'react';
import ReactDOM from 'react-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false
    };
    this.buildTechLabelImages = this.buildTechLabelImages.bind(this);
    this.buildImageCarouselElements = this.buildImageCarouselElements.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showContent: true});
    } , 400);
  }

  shouldComponentUpdate(nextProps) {
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
    return pictures.map((picture, index) => {
      return (
        <div key={`image-carousel-image-${index}`}>
          <img src={picture.link} />
          <p className="legend">{picture.description}</p>
        </div>
      );
    });
  }

  renderCarousel(pictures) {
    return (
      <Carousel
        showThumbs={false}
        onChange={(arg1, arg2) => console.log('changing the position: ', arg1, arg2)}
        width={'980px'}
      >
        {
          this.buildImageCarouselElements(pictures)
        }
      </Carousel >
    );
  }

  render() {
    const { showContent } = this.state;
    const { project } = this.props;
    
    return (
      <section className={`main-track ${showContent ? 'show' : ''}`}>
      
        <div className="inner-wrapper no-padding">
          <div className="project-title-wrapper no-padding">
            <h1>{project.title}</h1>
            <ul className="project-tech-wrapper">
              {
                this.buildTechLabelImages(project.stack)
              }
            </ul>
          </div>
        </div>

        <div className="inner-wrapper no-padding">
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