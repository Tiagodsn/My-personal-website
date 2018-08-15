// @flow
import React, { PureComponent } from "react";
import Event from './event';

type Props = {
  events: Array<Object>
}

class Events extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  /*:: createList: () => Array<Object> */
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
