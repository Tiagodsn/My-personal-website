import React, { Component } from "react";
import Home from './home';
import Header from './header';
import Timeline from './timeline';
import Skills from './skills';
import Hobbies from './hobbies';
import Contact from './contact';
import Footer from './footer';
import {
  timeline as timelineData,
  hobbies as hobbiesData,
  skills as skillsData,
  contacts as contactData,
  home as homeData
} from '../../data.json';

class Container extends Component {
  constructor (props) {
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

    return (
      <div>
        <Home data={ homeData }/>
        <Header />
        <Timeline data={ timelineData } />
        <Skills data={ skillsData } />
        <Hobbies data={ hobbiesData }/>
        <Contact data={ contactData }/>
        <Footer />
      </div>
    );
  }
}
export default Container;
