// @flow
import React from "react";
import Section from '../../components/section';
import SkillsList from './skillsList';

type Props = {
  data: {
    skills: Array<Object>
  }
}

function skills(props: Props) {
  const { data } = props;

  return (
    <Section id="skills" title="Skills">
      <SkillsList {...data} />
    </Section>
  )
}
export default skills;
