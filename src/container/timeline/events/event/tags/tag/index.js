import React, { PureComponent } from 'react';

class Tag extends PureComponent {

  render() {
    const { tag } = this.props;

    return (
      <li className="event-tag-item">
        {tag}
      </li>
    );
  }
}

export default Tag;
