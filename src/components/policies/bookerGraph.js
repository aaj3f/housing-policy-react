import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineMarkSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, Hint, DiscreteColorLegend} from 'react-vis';

class BookerGraph extends Component {

  componentDidMount() {

  }

  renderHint = () => {
    if (this.props.mainGraph[2].flag) {
      return(
        <Hint
        value={{x: this.props.mainGraph[2].salary, y: this.props.mainGraph[2].credit}}
        align={{horizontal: 'right', vertical: 'top'}}
        style={{ fontWeight: "bolder"}}
      >
        <div className="custom-hint text-white">
          This is you!
        </div>
      </Hint>
      )
    } else {
      return null
    }
  }

  render() {
    // debugger;
    const [userLow, userMid, userHigh] = this.props.mainGraph
    const [subLow, subMid, subHigh] = this.props.subGraph
    const mainData = [
      {x: userLow.salary, y: userLow.credit, size: 4},
      {x: userMid.salary, y: userMid.credit, size: 4},
      {x: userHigh.salary, y: userHigh.credit, size: (userHigh.flag ? 15 : 4)},
      {x: (userLow.salary <= subLow.salary ? userLow.salary : subLow.salary) * 0.9, y: null, size: 0},
      {x: (userHigh.salary > subHigh.salary ? userHigh.salary : subHigh.salary) * 1.1, y: null, size: 0},
      {x: null, y: (userLow.credit > subLow.credit ? userLow.credit : subLow.credit) * 1.1, size: 0},
      {x: null, y: 0, size: 0}
    ]
    const subData = [
      {x: subLow.salary, y: subLow.credit, size: 4},
      {x: subMid.salary, y: subMid.credit, size: 4},
      {x: subHigh.salary, y: subHigh.credit, size: 4},
    ]

    const ITEMS = [
      {title: 'Booker\'s Policy Benefits', strokeWidth: 4, opacity: 1},
      {title: 'Harris\' Policy Benefits', strokeWidth: 4, strokeStyle: "dashed", opacity: "0.3"}
      // {title: 'Dots', color: 'url(#circles)', strokeWidth: 9},
      // {title: 'Stripes', color: 'url(#stripes)'},
      // {title: 'Wide stripes', color: 'url(#stripes)', strokeWidth: 13},
      // {title: 'Normal', color: 'purple'},
      // {title: 'Wide', color: 'powderblue', strokeWidth: 6},
    ];

    // const markData = [
    //   {x: userLow.salary, y: userLow.credit, size: 4},
    //   {x: userMid.salary, y: userMid.credit, size: 4},
    //   {x: userHigh.salary, y: userHigh.credit, size: (userHigh.flag ? 30 : 4)}
    // ]
    return(
      <React.Fragment>
        <XYPlot className="mx-auto" height={400} width={window.visualViewport.width - 30}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis position="middle" tickTotal={5} title="Annual Income"/>
          <YAxis position="middle" title="Estimated Tax Credit"/>
          <LineMarkSeries data={mainData} getNull={(d) => d.y !== null && d.x !== null} sizeRange={ (userHigh.flag ? [5, 10] : null) } curve={'curveMonotoneX'} />
          <LineMarkSeries data={subData} strokeStyle="dashed" opacity="0.3" sizeRange={null} curve={'curveMonotoneX'} />
          {/* <Hint
            value={{x: this.props.subGraph[2].salary, y: this.props.subGraph[2].credit}}
            align={{horizontal: 'right', vertical: 'top'}}
            // style={{ fontWeight: "bolder"}}
          >
            <div className="custom-hint text-white">
              Harris' Policy Benefits
            </div>
          </Hint> */}
          {/* <MarkSeries
            strokeWidth={2}
            opacity="0.8"
            sizeRange={ (userHigh.flag ? [5, 15] : null) }
            data={markData}
          /> */}
          {this.renderHint()}
        </XYPlot>
        <Row>
          <DiscreteColorLegend orientation="horizontal" width={400} items={ITEMS} className="col text-white"/>
        </Row>
      </React.Fragment>
    )
  }
}

export default BookerGraph
