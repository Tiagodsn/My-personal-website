import React, { PureComponent } from "react";
import Section from '../../components/section';
import HobbiesList from './hobbiesList';

class Hobbies extends PureComponent {

  render () {
    const { data: { list, introduction } } = this.props;
    return (
      <Section id="hobbies" title="Hobbies">
        <p className="hobbies-introduction" dangerouslySetInnerHTML={{__html: introduction}} />
        <HobbiesList hobbies = { list } />
      </Section>
    )
  }
}
export default Hobbies;
