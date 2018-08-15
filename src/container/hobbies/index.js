// @flow
import React, { PureComponent } from "react";
import Section from '../../components/section';
import HobbiesList from './hobbiesList';

type Props = {
  data: {
    list: Array<Object>,
    introduction: string
  }
}

function hobbies(props: Props) {
  const { data: { list, introduction } } = props;

  return (
    <Section id="hobbies" title="Hobbies">
      <p className="hobbies-introduction" dangerouslySetInnerHTML={{__html: introduction}} />
      <HobbiesList hobbies={ list } />
    </Section>
  )
}
export default hobbies;
