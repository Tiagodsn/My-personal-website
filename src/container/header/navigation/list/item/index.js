// @flow
import React, { Component } from "react";

type Props = {
  item: string,
  current: string
}
class Item extends Component<Props> {
  constructor(props: Object) {
    super(props);
    this._isCurrent = this._isCurrent.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }

  /*:: _isCurrent: () => boolean */
  _isCurrent() {
    const { item, current } = this.props;
    return item === current;
  }

  /*:: getClassName: () => string */
  getClassName() {
    const { item, current } = this.props;

    return `nav-item ${this._isCurrent() ? 'active' : ''}`;
  }

  shouldComponentUpdate(nextProps: Object) {
    const { current, item } = nextProps;
    return this._isCurrent() || current === item;
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
