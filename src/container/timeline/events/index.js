import React, { PureComponent } from "react";
import Event from './event';

class Events extends PureComponent {
  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  createList() {
    const { events } = this.props;

    return events.map((item) =>
      <Event key={`resume-event-${item.year}`} event={item}/>
    );
  }

  render () {
    const list = this.createList();
    return (
      <div className="event-list">
        { list }
      </div>
    )
  }
}
export default Events;
