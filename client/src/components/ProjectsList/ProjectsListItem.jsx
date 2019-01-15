import React from 'react';

export default class ProjectsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectListItem = this.selectListItem.bind(this);
  }

  selectListItem(e) {
    const { onSelectFunction } = this.props;
    onSelectFunction();
    // e.target.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  render() {
    const { project, selected } = this.props;

    return (

      <div className={`inner-wrapper projects-list-item ${selected ? 'selected' : ''}`} onClick={this.selectListItem}>
        {project.title}
        {/* title */}
        {/* image? */}
        {/* Overview */}
      </div>
      
    );

  }
}