import React, { PureComponent } from "react";

class Section extends PureComponent {

  render () {
    const { id, title, children } = this.props;

    return (
      <section id={id}>
          <div className="container">
              <div className="row">
                <div className="col-12 section-header">
                    <h2>
                      <span>{title}</span>
                    </h2>
                </div>
                <div className="col-12">
                  { children }
                </div>
              </div>
          </div>
      </section>
    )
  }
}
export default Section;
