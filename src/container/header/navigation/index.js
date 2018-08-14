import React, { PureComponent } from "react";
import Scrollspy from 'react-scrollspy';

const sections = ['home', 'resume', 'skills', 'hobbies', 'contact'];

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  createList() {
    const { hobbies } = this.props;

    return sections.map((item) => (
      <li className="nav-item" key={`navigation-item-${item}`}>
        <a href={`#${item}`} className="nav-link">{ item }</a>
      </li>
    ));
  }

  render () {
    const list = this.createList();

    return (
      <Scrollspy
        className="navbar-nav"
        offset={ - 150 }
        items={ sections }
        currentClassName="active"
      >
        { list }
      </Scrollspy>

    )
  }
}
export default Navigation;
