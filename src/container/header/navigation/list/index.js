// @flow
import React, { PureComponent } from "react";
import Item from './item';

type Props = {
  sections: Array<string>,
  current: string
}

class List extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  /*:: createList: () => Array<Object> */
  createList() {
    const { sections, current } = this.props;

    return sections.map((item) => (
      <Item key={`navigation-item-${item}`} item={item} current={current}/>
    ));
  }

  render () {
    const list = this.createList();

    return list;
  }
}
export default List;
