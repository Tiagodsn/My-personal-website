// @flow
import React from 'react';

type Props = {
  tag: string
}

function Tag(props: Props) {
  const { tag } = props;

  return (
    <li className="event-tag-item">
      {tag}
    </li>
  );
}

export default Tag;
