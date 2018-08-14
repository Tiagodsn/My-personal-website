import React, { PureComponent } from "react";
import SocialLink from './socialLink';

class SocialNetworkList extends PureComponent {
  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

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
