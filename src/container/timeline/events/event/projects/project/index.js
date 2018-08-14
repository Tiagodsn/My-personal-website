import React, { PureComponent } from 'react';

class Project extends PureComponent {

  render() {
    const { project: { url, description, name, year } } = this.props;

    return (
      <li className="event-project-item">
        <a href={url} target="_blank">{name}</a> - {description} | {year}
      </li>
    );
  }
}

export default Project;
