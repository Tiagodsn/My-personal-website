// @flow
import React from 'react';
import Icon from '../../../../components/icon';

type Props = {
  socialNetwork: {
    icon: string,
    link: {
      href: string,
      title: string
    }
  }
}

function socialLink(props: Props) {
  const { socialNetwork: { icon, link } } = props;

  return (
    <li>
      <a {...link}>
        <Icon type={icon} />
      </a>
    </li>
  );
}

export default socialLink;
