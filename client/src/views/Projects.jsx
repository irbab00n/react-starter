import React from 'react';

import ProjectsList from '../components/ProjectsList/';

const Projects = (props) => (
  <main className="projects-page-layout">
    
    <ProjectsList />

    <section className="main-track">
      <div className="inner-wrapper">
        Main Track
      </div>
    </section>

  </main>
);

export default Projects;