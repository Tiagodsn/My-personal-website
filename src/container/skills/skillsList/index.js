import React, { PureComponent } from "react";
import Skill from './skill';

class SkillsList extends PureComponent {
  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  createList() {
    const { skills } = this.props;

    return skills.map((item) =>
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
