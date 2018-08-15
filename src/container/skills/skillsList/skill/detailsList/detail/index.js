// @flow
import React from 'react';

type Props = {
  detail: string
}

function detail(props: Props) {
  const { detail } = this.props;

  return (
    <li> { detail } </li>
  )
}

export default detail;
