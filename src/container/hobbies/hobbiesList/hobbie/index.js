// @flow
import React from 'react';
import Icon from './icon';

type Props = {
  hobbie: {
    img: {
      src: string,
      alt: string
    },
    link: string,
    type: string
  }
}

function hobbie(props: Props) {
  const { hobbie: { img, link, type } } = props;

  return (
    <article className="col-6 col-sm-4 col-md-3">
      <div className="hobbies-item">
        <img {...img} />
        <a href={link} target="_blank">
          <Icon type={type} size="3x"/>
        </a>
      </div>
    </article>
  )
}

export default hobbie;
