import React, { PureComponent } from 'react';

class Icon extends PureComponent {
  constructor(props) {
    super(props);
    this.getSocialClass = this.getSocialClass.bind(this);
    this.getSizeClass = this.getSizeClass.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }
  getSocialClass() {
    const { type = 'instagram'} = this.props;
    switch (type) {
      case 'music':
        return 'fa-spotify'
      default:
        return 'fa-instagram'
    }
  }

  getSizeClass() {
    const { size = '3x' } = this.props;
    return `fa-${size}`
  }

  getClassName() {
    return `fa ${this.getSocialClass()} ${this.getSizeClass()}`
  }

  render() {
    const iconClass = this.getClassName();

    return (
      <i className={ iconClass }></i>
    )

  }
}

export default Icon;
