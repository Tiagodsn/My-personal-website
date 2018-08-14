// @flow
import React from "react";

type Props = {
  background: {
    description: string,
    link: string
  }
}

function backgroundLink(props: Props) {
  const { background: { description, link } } = props;

  return (
    <a className="background-description" href={link} target="_blank">
      { description }
    </a>
  )
}

export default backgroundLink;
