import React, { PureComponent } from "react";

class BackgroundLink extends PureComponent {
  render () {
    const { background: { description, link } } = this.props;

    return (
      <a className="background-description" href={link} target="_blank">
        { description }
      </a>
    )
  }
}

export default BackgroundLink;
