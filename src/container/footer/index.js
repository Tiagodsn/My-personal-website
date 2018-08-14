import React, { PureComponent } from "react";

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.getYear = this.getYear.bind(this);
  }

  getYear() {
    const current = new Date();

    return current.getFullYear();
  }

  render () {
    const year = this.getYear();

    return (
      <footer id="footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col copyright">
              { `© ${ year } Tiago Neves`}
            </div>
            <div className="col made-with-love">
              made with <span>❤</span> in Düsseldorf
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer;
