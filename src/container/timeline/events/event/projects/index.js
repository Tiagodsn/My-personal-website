// @flow
import React, { PureComponent } from 'react';
import Project from './project';
import { map, get } from 'lodash';

type Props = {
  event: {
    projects?: Array<Object>,
    year: number
  }
}

class Projects extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  /*:: createList: () => Array<Object> */
  createList() {
    const { event } = this.props;
    const projects = get(event, 'projects', null);

    if(!projects) return null;

    const { year } = event;

    return map(projects, (project, index) => (
      <Project key={`projects-${year}-${index}`} project={project} />
    ))
  }

  render() {
    const list = this.createList();
    if(!list) return null;

    return (
      <ul className="event-project-list">
        { list }
      </ul>
    )
  }
}

export default Projects;
