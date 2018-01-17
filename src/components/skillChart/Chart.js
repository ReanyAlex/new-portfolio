import React from 'react';
import * as d3 from 'd3';
import BubbleChart from './components/BubbleChart';
import Bubbles from './components/Bubbles';
import { createNodes } from './utils';
import { width, height, center } from './constants';

export default class extends React.Component {
  state = {
    data: [],
    grouping: 'all'
  };

  componentDidMount() {
    d3.csv('data/skills.csv', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        data: createNodes(data)
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="Chart">
        <BubbleChart width={width} height={height}>
          <Bubbles data={data} forceStrength={0.02} center={center} />
        </BubbleChart>
      </div>
    );
  }
}
