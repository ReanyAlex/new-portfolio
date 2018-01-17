import React, { Component } from 'react';

import Header from './components/header';
import Introduction from './components/introduction';
import Skills from './components/skillSet';
import Projects from './components/projects/ProjectsHolder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class="wrapper">
          <Introduction />
          <Skills />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
