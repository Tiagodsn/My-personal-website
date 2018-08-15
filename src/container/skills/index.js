// @flow
import React from "react";
import Section from '../../components/section';
import SkillsList from './skillsList';

type Props = {
  data: Array<Object>
}

function skills(props: Props) {
  const { data } = props;

  return (
    <Section id="skills" title="Skills">
      <SkillsList skills={data} />
    </Section>
  )
}
export default skills;
