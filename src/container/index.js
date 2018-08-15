// @flow
import React, { Component } from "react";
import Home from './home';
import Header from './header';
import Timeline from './timeline';
import Skills from './skills';
import Hobbies from './hobbies';
import Contact from './contact';
import Footer from './footer';

type Props = {
  timeline: Array<Object>,
  hobbies: Object,
  skills: Object,
  contacts: Object,
  home: Object,
}

type State = {
  loading: boolean
};

class Container extends Component<Props, State> {
  constructor (props: Object) {
      super(props)

      this.state = {
        loading: true
      }
    }

    componentDidMount () {
      this.setState({ loading: false })
    }

  render() {
    const { loading } = this.state;
    if(loading) return null;

    const { timeline, hobbies, skills, contacts, home } = this.props;
    return (
      <div>
        <Home data={ home }/>
        <Header />
        <Timeline data={ timeline } />
        <Skills data={ skills } />
        <Hobbies data={ hobbies }/>
        <Contact data={ contacts }/>
        <Footer />
      </div>
    );
  }
}
export default Container;
