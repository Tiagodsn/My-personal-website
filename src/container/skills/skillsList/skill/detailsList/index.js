// @flow
import React, { PureComponent } from 'react';
import Detail from './detail';
import { map } from 'lodash';

type Props = {
  details: Array<string>
}

class SkillsList extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  /*:: createList: () => Array<Object> */
  createList() {
    const { details } = this.props;

    return map(details, (item, index) =>
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
