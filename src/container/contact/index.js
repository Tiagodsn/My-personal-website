// @flow
import React from "react";
import Section from '../../components/section';
import SocialNetworks from './socialNetworks';

type Props = {
  data: {
    introduction: string,
    socialNetworks: Array<Object>,
    conclusion: string
  }
};

function contact(props: Props) {
  const { data: { introduction, socialNetworks, conclusion } } = props;
  
  return (
    <Section id="contact" title="Don't be shy">
      <p dangerouslySetInnerHTML={{__html: introduction}} />
      <SocialNetworks socialNetworks={ socialNetworks } />
      <p dangerouslySetInnerHTML={{__html: conclusion}} />
    </Section>
  )
}
export default contact;
