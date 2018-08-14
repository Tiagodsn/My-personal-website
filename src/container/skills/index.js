import React, { PureComponent } from "react";
import Section from '../../components/section';
import SkillsList from './skillsList';

class Skills extends PureComponent {

  render () {
    const { data } = this.props;
    return (
      <Section id="skills" title="Skills">
        <SkillsList skills={data} />
      </Section>
    )
  }
}
export default Skills;
