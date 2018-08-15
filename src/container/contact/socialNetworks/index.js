// @flow
import React from "react";
import SocialLink from './socialLink';

type Props = {
  socialNetworks: Array<Object>
}

function socialNetworkList(props: Props) {
  const { socialNetworks } = props;

  const listItems = socialNetworks.map((item) =>
    <SocialLink key={`socialNetworks-${item.icon}`} socialNetwork={item}/>
  );

  return (
    <ul>
      { listItems }
    </ul>
  )
}
export default socialNetworkList;
