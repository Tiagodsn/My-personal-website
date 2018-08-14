import React, { PureComponent } from "react";

class ScrollDownButton extends PureComponent {
  render() {
    return (
      <a href="#resume" className="scroll-down">
        <i className="fa fa-angle-down fa-2x"></i>
      </a>
    )
  }
}

export default ScrollDownButton;
