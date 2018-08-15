// @flow
import * as React from "react";

type Props = {
  id: string,
  title: string,
  children?: React.Node
}

function section(props: Props) {
  const { id, title, children } = props;

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
export default section;
