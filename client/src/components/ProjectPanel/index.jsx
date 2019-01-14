import React from 'react';

export default class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.buildTechLabelImages = this.buildTechLabelImages.bind(this);
  }

  buildTechLabelImages(images) {
    return images.map(image => {
      return (
        <li>{image}</li>
      );
    });
  }

  render() {
    const { project } = this.props;
    
    return (
      <section className="main-track">
      
        <div className="inner-wrapper full-width no-padding">
          <div className="project-title-wrapper no-padding">
            <h1>{project.title}</h1>
            <ul className="project-tech-wrapper">
              {
                this.buildTechLabelImages(project.stack)
              }
            </ul>
          </div>
        </div>

        <div className="inner-wrapper full-width no-padding">
          <div className="project-pictures-wrapper">
            Pictures
          </div>
        </div>

      </section>
    );

  }
}