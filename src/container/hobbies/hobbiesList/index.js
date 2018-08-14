import React, { PureComponent } from "react";
import Hobbie from '../hobbie';

class HobbiesList extends PureComponent {
  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  createList() {
    const { hobbies } = this.props;

    return hobbies.map((item) =>
      <Hobbie key={`hobbies-${item.link}`} hobbie={item}/>
    );
  }

  render () {
    const list = this.createList();

    return (
      <div className="hobbies-items row">
        { list }
      </div>
    )
  }
}
export default HobbiesList;
