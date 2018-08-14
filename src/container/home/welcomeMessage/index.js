// @flow
import React from "react";

type Props = {
  title: string,
  subtitle: string
}

function welcomeMessage(props: Props) {
  const { title, subtitle } = props;

  return (
    <div className="welcome-message">
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
    </div>
  )
}
export default welcomeMessage;
