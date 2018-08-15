// @flow
import React, { PureComponent } from "react";
import Hobbie from './hobbie';

type Props = {
  hobbies: Array<Object>
}

class HobbiesList extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  /*:: createList: () => Array<Object> */
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
