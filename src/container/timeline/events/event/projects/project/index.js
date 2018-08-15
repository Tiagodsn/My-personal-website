// @flow
import React from 'react';

type Props = {
  project: {
    url: string,
    description: string,
    name: string,
    year: number
  }
}

function Project(props: Props) {
  const { project: { url, description, name, year } } = props;

  return (
    <li className="event-project-item">
      <a href={url} target="_blank">{name}</a> - {description} | {year}
    </li>
  );
}

export default Project;
