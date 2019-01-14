import React from 'react';

import ProjectsListItem from './ProjectsListItem';

export default class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.buildProjectsListItems = this.buildProjectsListItems.bind(this);
  }

  buildProjectsListItems(projects) {
    const { currentIndex, onSelectFunction } = this.props;
    return projects.map((project, index) => {
      return (
        <ProjectsListItem
          key={`project-list-item-${index}`}
          project={project}
          onSelectFunction={() => onSelectFunction(index)}
          selected={currentIndex === index}
        />
      );
    });
  }

  render() {
    const { projects } = this.props;

    return (
      <section className="side-track">
        {
          this.buildProjectsListItems(projects)
        }
      </section>
    );

  }
}