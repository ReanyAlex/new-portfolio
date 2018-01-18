import React, { Component } from 'react';

import RMA from './rma_project';
export default class extends Component {
  render() {
    return (
      <div id="projects">
        <button onClick={() => document.querySelector('#introduction').classList.remove('projects')}>Move up</button>
        <h2>Projects:</h2>
        <p>A sample of some of my projects</p>
        <RMA />
        <button onClick={() => document.querySelector('#introduction').classList.add('contact')}>Move Down</button>
      </div>
    );
  }
}
