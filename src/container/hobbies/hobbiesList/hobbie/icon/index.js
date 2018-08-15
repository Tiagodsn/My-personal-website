// @flow
import React, { PureComponent } from 'react';

type Props = {
  type: string,
  size: string
}

class Icon extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.getSocialClass = this.getSocialClass.bind(this);
    this.getSizeClass = this.getSizeClass.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }

  /*:: getSocialClass: () => string */
  getSocialClass() {
    const { type } = this.props;

    return `fa-${type}`
  }

  /*:: getSizeClass: () => string */
  getSizeClass() {
    const { size } = this.props;

    return `fa-${size}`
  }

  /*:: getClassName: () => string */
  getClassName() {
    const social = this.getSocialClass();
    const size = this.getSizeClass();

    return `fa ${social} ${size}`
  }

  render() {
    const iconClass = this.getClassName();

    return (
      <i className={ iconClass }></i>
    )

  }
}

export default Icon;
