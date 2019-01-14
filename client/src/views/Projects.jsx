import React from 'react';

import ProjectsList from '../components/ProjectsList/';
import ProjectPanel from '../components/ProjectPanel/';

import projects from '../lib/projects';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
  }

  setCurrentIndex(index) {
    this.setState({
      currentIndex: index
    });
  }

  render() {
    const { currentIndex } = this.state;
    
    return (
      <main className="projects-page-layout">
        <ProjectsList 
          currentIndex={currentIndex}
          projects={projects}
          onSelectFunction={this.setCurrentIndex}
        />
        <ProjectPanel
          project={projects[currentIndex]}
        />
      </main>
    );

  }
};