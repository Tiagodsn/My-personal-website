//@ flow
import React from "react";

const getYear = () => new Date().getFullYear();

type Props = {}

function footer(props: Props) {
  const year = getYear();

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
export default footer;
