// @flow
import React, { PureComponent } from "react";
import SocialLink from './socialLink';

type Props = {
  socialNetworks: Array<Object>
}

class SocialNetworkList extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  /*:: createList: () => Array<Object> */
  createList() {
    const { socialNetworks } = this.props;

    return socialNetworks.map((item) =>
      <SocialLink key={`socialNetworks-${item.icon}`} socialNetwork={item}/>
    );
  }

  render () {
    const list = this.createList();

    return (
      <ul>
        { list }
      </ul>
    )
  }
}
export default SocialNetworkList;
