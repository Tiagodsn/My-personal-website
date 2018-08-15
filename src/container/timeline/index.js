// @flow
import React from "react";
import Section from '../../components/section';
import Events from './events';

type Props = {
  data: Array<Object>
}

function Timeline(props: Props) {
  const { data } = props;

  return (
    <Section id="resume" title="Resume">
      <div className="timeline">
        <div className="row timeline-header"></div>
        <Events events={ data }/>
      </div>
    </Section>
  )
}
export default Timeline;
