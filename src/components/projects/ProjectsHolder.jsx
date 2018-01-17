import React, { Component } from 'react';

import RMA from './rma_project';
export default class extends Component {
  render() {
    return (
      <div id="projects">
        <h2>Projects:</h2>
        <p>A sample of some of my projects</p>
        <RMA />
      </div>
    );
  }
}
