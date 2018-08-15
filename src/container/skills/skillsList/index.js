// @flow
import React, { PureComponent } from "react";
import Skill from './skill';
import { map } from 'lodash';

type Props = {
  skills: Array<Object>
}

class SkillsList extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  /*:: createList: () => Array<Object> */
  createList() {
    const { skills } = this.props;

    return map(skills, (item) =>
      <Skill key={`skills-${item.name}`} skill={item}/>
    );
  }

  render () {
    const list = this.createList();

    return (
      <div className="skills-list row">
        { list }
      </div>
    )
  }
}
export default SkillsList;
