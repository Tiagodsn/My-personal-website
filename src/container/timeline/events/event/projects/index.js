import React, { PureComponent } from 'react';
import Project from './project';

class Projects extends PureComponent {

  render() {
    const { event: { projects, year } } = this.props;
    if(!projects) return null;
    return (
      <ul className="event-project-list">
        { projects.map((project, index) => (
          <Project key={`projects-${year}-${index}`} project={project} />
        ))}
      </ul>
    )
  }
}

export default Projects;
