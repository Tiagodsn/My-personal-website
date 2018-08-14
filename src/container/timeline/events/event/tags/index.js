import React, { PureComponent } from 'react';
import Tag from './tag';

class Tags extends PureComponent {

  render() {
    const { event: { year, tags} } = this.props;
    return (
      <ul className="event-tag-list">
        {tags.map((tag, index) => (<Tag key={`tags-${year}-${index}`} tag={tag} />))}
      </ul>
    )
  }
}

export default Tags;
