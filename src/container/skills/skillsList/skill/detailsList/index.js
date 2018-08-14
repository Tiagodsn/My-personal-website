import React, { PureComponent } from 'react';
import Detail from './detail';

class SkillsList extends PureComponent {
  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  createList() {
    const { details } = this.props;

    return details.map((item, index) =>
      <Detail key={`skills-details-${index}`} detail={item}/>
    );
  }

  render () {
    const list = this.createList();

    return (
      <ul>
        { list }
      </ul>
    )
  }
}
export default SkillsList;
