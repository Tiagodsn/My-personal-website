import React, { PureComponent } from 'react';
import Tags from './tags';
import Projects from './projects';

class Event extends PureComponent {

  render() {
    const { event: { year, name, location, period } } = this.props;
    return (
      <div className="row event">
        <div className="event-badge">
            <span>{ year }</span>
        </div>
        <div className="col">
          <div className="event-panel">
            <p className="event-name">{name}</p>
            <p className="event-location">{location}</p>
            <Projects {...this.props} />
            <Tags {...this.props} />
            <p className="event-period">{period}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Event;
