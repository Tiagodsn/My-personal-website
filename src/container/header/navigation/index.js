// @flow
import React, { PureComponent } from "react";
import Scrollspy from 'react-scrollspy';
import List from './list';

const OFFSET = -150;
const SECTIONS = ['home', 'resume', 'skills', 'hobbies', 'contact'];
const ACTIVECLASS = 'active';

type State = {
  current: string
};

class Navigation extends PureComponent<{}, State> {
  constructor(props: Object) {
    super(props);
    this.state = {
      current: SECTIONS[0]
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  /*:: handleUpdate: (Object) => void */
  handleUpdate(event: Object) {
    const { id } = event;

    this.setState({
      current: id
    });
  }

  render() {
    const { current } = this.state;

    return (
      <Scrollspy
        offset={ OFFSET }
        items={ SECTIONS }
        currentClassName={ ACTIVECLASS }
        className="navbar-nav"
        onUpdate={this.handleUpdate}
      >
        <List sections={SECTIONS} current={current} />
      </Scrollspy>

    )
  }
}
export default Navigation;
