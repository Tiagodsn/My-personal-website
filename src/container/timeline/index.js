import React, { PureComponent } from "react";
import Section from '../../components/section';
import Events from './events';

class Timeline extends PureComponent {

  render () {
    const { data } = this.props;
    return (
      <Section id="resume" title="Resume">
        <div className="timeline">
          <div className="row timeline-header"></div>
          <Events events={ data }/>
        </div>
      </Section>
    )
  }
}
export default Timeline;
