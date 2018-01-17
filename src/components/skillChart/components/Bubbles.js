import React from 'react';
import * as d3 from 'd3';

export default class Bubbles extends React.Component {
  constructor(props) {
    super(props);
    const { forceStrength, center } = props;
    this.simulation = d3
      .forceSimulation()
      .velocityDecay(0.2)
      .force(
        'x',
        d3
          .forceX()
          .strength(forceStrength)
          .x(center.x)
      )
      .force(
        'y',
        d3
          .forceY()
          .strength(forceStrength)
          .y(center.y)
      )
      .force('charge', d3.forceManyBody().strength(this.charge.bind(this)))
      .on('tick', this.ticked.bind(this))
      .stop();
  }

  state = {
    g: null
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.renderBubbles(nextProps.data);
    }
    if (nextProps.groupByYear !== this.props.groupByYear) {
      this.regroupBubbles(nextProps.groupByYear);
    }
  }

  shouldComponentUpdate() {
    // we will handle moving the nodes on our own with d3.js
    // make React ignore this component
    return false;
  }

  onRef = ref => {
    this.setState({ g: d3.select(ref) }, () => this.renderBubbles(this.props.data));
  };

  ticked() {
    this.state.g
      .selectAll('.bubble')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);

    this.state.g
      .selectAll('.text')
      .attr('x', d => {
        return d.x;
      })
      .attr('y', d => d.y + 8.75);
  }

  charge(d) {
    return -this.props.forceStrength * d.radius ** 2.0;
  }

  renderBubbles(data) {
    const bubbles = this.state.g.selectAll('.bubble .text').data(data, d => d.id);

    // Exit
    bubbles.exit().remove();

    // Enter
    const bubblesE = bubbles
      .enter()
      .append('circle')
      .classed('bubble', true)
      .attr('r', 0)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('fill', d => d.color)
      .attr('stroke', d => d.color)
      .attr('stroke-width', 2)
      .attr('opacity', 1);

    bubbles
      .enter()
      .append('text')
      .classed('text', true)
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .text(d => d.name)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'sans-serif')
      .attr('font-size', '15px')
      .attr('fill', 'black');

    bubblesE
      .transition()
      .duration(2000)
      .attr('r', d => {
        console.log(d);
        console.log(data);
        return d.radius;
      })
      .on('end', () => {
        this.simulation
          .nodes(data)
          .alpha(1)
          .restart();
      });
  }

  render() {
    return <g ref={this.onRef} className="bubbles" />;
  }
}
