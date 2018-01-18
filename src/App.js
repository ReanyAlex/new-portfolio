import React, { Component } from 'react';
import Header from './components/header';
import Introduction from './components/introduction';
import Skills from './components/skillSet';
import Projects from './components/projects/ProjectsHolder';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
