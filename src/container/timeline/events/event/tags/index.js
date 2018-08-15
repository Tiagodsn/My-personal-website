// @flow
import React, { PureComponent } from 'react';
import Tag from './tag';
import { map, get } from 'lodash';

type Props = {
  event: {
    year: number,
    tags: Array<string>
  }
}
class Tags extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  /*:: createList: () => Array<Object> */
  createList() {
    const { event: { tags, year } } = this.props;

    if(!tags) return null;

    return map(tags, (tag, index) => (
      <Tag key={`tags-${year}-${index}`} tag={tag} />
    ))
  }

  render() {
    const list = this.createList();
    if(!list) return null;

    return (
      <ul className="event-tag-list">
        { list }
      </ul>
    )
  }
}

export default Tags;
