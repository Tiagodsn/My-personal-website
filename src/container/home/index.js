// @flow
import React, { PureComponent } from "react";
import WelcomeMessage from './welcomeMessage';
import ScrollDownButton from './scrollDownButton';
import BackgroundLink from './backgroundLink';

type Props = {
  data: {
    title: string,
    subtitle: string,
    background: {
      image: string,
      description: string,
      link: string
    }
  }
};

class Home extends PureComponent<Props> {
  constructor(props: Object) {
    super(props);
    this.getStyles = this.getStyles.bind(this);
  }

  /*:: getStyles: () => { backgroundImage: string } */
  getStyles() {
    const { data: { background: { image } } } = this.props;

    return { backgroundImage: `url(${image})`};
  }

  render () {
    const styles = this.getStyles();

    return (
      <section id="home" style={styles}>
        <WelcomeMessage {...this.props.data} />
        <BackgroundLink {...this.props.data} />
        <ScrollDownButton />
      </section>
    )
  }
}
export default Home;
