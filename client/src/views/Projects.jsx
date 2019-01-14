import React from 'react';

import ProjectsList from '../components/ProjectsList/';
import ProjectPanel from '../components/ProjectPanel/';

const Projects = (props) => (
  <main className="projects-page-layout">
    
    <ProjectsList />

    <ProjectPanel />
    
  </main>
);

export default Projects;