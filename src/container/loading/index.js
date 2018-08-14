import React, { PureComponent } from "react";

class Loading extends PureComponent {

  render () {
    const { loading } = this.props;

    return (
      <div className={`preloader ${loading ? 'loading' : 'loaded'}`}>
        <div className="status"></div>
      </div>
    )
  }
}
export default Loading;
