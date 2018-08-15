// @flow
import React from 'react';
import Tags from './tags';
import Projects from './projects';

type Props = {
  event: {
    year: number,
    name: string,
    location: string,
    period: string,
    projects ?: Array<Object>,
    tags: Array<string>
  }
}

function Event(props: Props) {
  const { event: { year, name, location, period } } = props;

  return (
    <div className="row event">
      <div className="event-badge">
          <span>{ year }</span>
      </div>
      <div className="col">
        <div className="event-panel">
          <p className="event-name">{name}</p>
          <p className="event-location">{location}</p>
          <Projects {...props} />
          <Tags {...props} />
          <p className="event-period">{period}</p>
        </div>
      </div>
    </div>
  )
}

export default Event;
