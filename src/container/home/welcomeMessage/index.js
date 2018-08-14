import React, { PureComponent } from "react";

class WelcomeMessage extends PureComponent {
  render () {
    const { title, subtitle } = this.props;

    return (
      <div className="welcome-message">
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
      </div>
    )
  }
}
export default WelcomeMessage;
