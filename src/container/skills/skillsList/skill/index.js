import React, { PureComponent } from 'react';
import DetailsList from './detailsList';

class Skill extends PureComponent {

  render() {
    const { skill: { name, details} } = this.props;
    return (
      <div className="col-12 col-md-4">
        <div className="skill-item">
          <h3>{ name }</h3>
          <DetailsList details={details} />
        </div>
      </div>
    )
  }
}

export default Skill;
