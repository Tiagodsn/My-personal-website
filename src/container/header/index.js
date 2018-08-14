import React, { PureComponent } from "react";
import Navigation from './navigation';

class Header extends PureComponent {
  render () {
    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">TIAGO<span>NEVES</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navigation">
            <Navigation />
          </div>
        </div>
      </nav>

    )
  }
}
export default Header;
