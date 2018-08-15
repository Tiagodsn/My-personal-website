// @flow
import React from 'react';
import DetailsList from './detailsList';

type Props = {
  skill: {
    name: string,
    details: Array<string>
  }
}

function skill(props: Props) {
  const { skill: { name, details } } = props;
  return (
    <div className="col-12 col-md-4">
      <div className="skill-item">
        <h3>{ name }</h3>
        <DetailsList details={details} />
      </div>
    </div>
  )
}

export default skill;
