// @flow
import React, { PureComponent } from "react";

type Props = {
  item: string,
  current: string
}
class Item extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.getClassName = this.getClassName.bind(this);
  }

  /*:: getClassName: () => string */
  getClassName() {
    const { item, current } = this.props;
    const isCurrent = item === current;

    return `nav-item ${isCurrent ? 'active' : ''}`;
  }


  render () {
    const { item } = this.props;
    const className = this.getClassName();

    return (
      <li className={className}>
        <a href={`#${item}`} className="nav-link">{ item }</a>
      </li>
    )
  }
}
export default Item;
