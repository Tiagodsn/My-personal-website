import React, { PureComponent } from 'react';
import Icon from './icon';

class Hobbie extends PureComponent {

  render() {
    const { hobbie: { img, link, type } } = this.props;
    return (
      <article className="col-6 col-sm-4 col-md-3">
        <div className="hobbies-item">
          <img {...img} />
          <a href={link} target="_blank">
            <Icon type={type} size="3x"/>
          </a>
        </div>
      </article>
    )
  }
}

export default Hobbie;
