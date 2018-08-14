import React, { PureComponent } from "react";
import WelcomeMessage from './welcomeMessage';
import ScrollDownButton from './scrollDownButton';
import BackgroundLink from './backgroundLink';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.getStyles = this.getStyles.bind(this);
  }

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
