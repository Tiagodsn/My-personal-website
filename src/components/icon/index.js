// @flow
import React, { PureComponent } from 'react';

type Props = {
  type: string,
  size?: string
}

class Icon extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.getTypeClass = this.getTypeClass.bind(this);
    this.getSizeClass = this.getSizeClass.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }

  /*:: getTypeClass: () => string */
  getTypeClass() {
    const { type } = this.props;

    return `fa-${type}`
  }

  /*:: getSizeClass: () => string */
  getSizeClass() {
    const { size } = this.props;
    if(!size) return null;

    return `fa-${size}`
  }

  /*:: getClassName: () => string */
  getClassName() {
    const social = this.getTypeClass();
    const size = this.getSizeClass();

    return `fa ${social} ${size}`
  }

  render() {
    const iconClass = this.getClassName();

    return (
      <i className={iconClass} />
    );
  }
}

export default Icon;
