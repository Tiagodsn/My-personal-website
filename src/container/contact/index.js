import React, { PureComponent } from "react";
import Section from '../../components/section';
import SocialNetworks from './SocialNetworks';

class Contact extends PureComponent {

  render () {
    const { data: { introduction, socialNetworks, conclusion } } = this.props;
    return (
      <Section id="contact" title="Don't be shy">
        <p dangerouslySetInnerHTML={{__html: introduction}} />
        <SocialNetworks socialNetworks={ socialNetworks } />
        <p dangerouslySetInnerHTML={{__html: conclusion}} />
      </Section>
    )
  }
}
export default Contact;
