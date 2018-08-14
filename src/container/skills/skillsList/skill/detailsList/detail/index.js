import React, { PureComponent } from 'react';

class Detail extends PureComponent {

  render() {
    const { detail } = this.props;
    return (
      <li> { detail } </li>
    )
  }
}

export default Detail;
