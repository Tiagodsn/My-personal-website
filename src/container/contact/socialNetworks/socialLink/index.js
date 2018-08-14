import React, { PureComponent } from 'react';

class SocialLink extends PureComponent {
  constructor(props) {
    super(props);
    this.getClassName = this.getClassName.bind(this);
  }

  getClassName() {
    const { socialNetwork: { icon } } = this.props;

    return `fa ${icon}`;
  }

  render() {
    const { socialNetwork: { link: { href, title } } } = this.props;
    const iconClassName = this.getClassName();

    return (
      <li>
          <a href={ href } title={ title }>
              <i className={iconClassName} />
          </a>
      </li>
    )

  }
}

export default SocialLink;
