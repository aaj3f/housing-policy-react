import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import { Container, Row, Col } from 'react-bootstrap'

class HarrisGraph extends Component {

  componentDidMount() {

  }

  render() {
    // debugger;
    const [userLow, userMid, userHigh] = this.props.graphData
    const data = [
      {x: userLow.salary, y: userLow.credit},
      {x: userMid.salary, y: userMid.credit},
      {x: userHigh.salary, y: userHigh.credit},
      {x: userLow.salary * 0.9},
      {x: userHigh.salary * 1.1},
      {y: userLow.credit * 1.1},
      {y: 0 }
    ]
    return(
      <XYPlot className="mx-auto" height={400} width={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis position="middle" tickTotal="5" title="Annual Income"/>
        <YAxis position="middle" title="Estimated Tax Credit"/>
        <LineSeries data={data} curve={'curveMonotoneX'} />
      </XYPlot>
    )
  }
}

export default HarrisGraph
