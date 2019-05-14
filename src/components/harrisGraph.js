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
      {y: userHigh.credit * 0.9}
    ]
    return(
      <Row>
        <Col>
          <XYPlot className="mx-auto" height={400} width={400}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis position="middle" tickTotal="5" title="Annual Income"/>
            <YAxis position="middle" title="Estimated Tax Credit"/>
            <LineSeries data={data} curve={'curveMonotoneX'} />
          </XYPlot>
        </Col>
        <Col>
          <div className="mx-auto">
            <h2>Harris' Policy Aims to Benefit:</h2>
            <p>[Policy Info Goes Here]</p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default HarrisGraph
