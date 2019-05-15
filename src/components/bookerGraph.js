import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, Hint, MarkSeries} from 'react-vis';

class BookerGraph extends Component {

  componentDidMount() {

  }

  renderHint = () => {
    if (this.props.graphData[2].flag) {
      return(
        <Hint
        value={{x: this.props.graphData[2].salary, y: this.props.graphData[2].credit}}
        align={{horizontal: 'right', vertical: 'top'}}
        style={{"font-weight": "bolder"}}
      >
        <div className="custom-hint text-white">
          This is you!
        </div>
      </Hint>
      )
    }
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
    const markData = [
      {x: userLow.salary, y: userLow.credit, size: 4},
      {x: userMid.salary, y: userMid.credit, size: 4},
      {x: userHigh.salary, y: userHigh.credit, size: (userHigh.flag ? 30 : 4)}
    ]
    return(
      <XYPlot className="mx-auto" height={400} width={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis position="middle" tickTotal="5" title="Annual Income"/>
        <YAxis position="middle" title="Estimated Tax Credit"/>
        <LineSeries data={data} curve={'curveMonotoneX'} />
        <MarkSeries
          strokeWidth={2}
          opacity="0.8"
          sizeRange={ (userHigh.flag ? [5, 15] : null) }
          data={markData}
        />
        {this.renderHint()}
      </XYPlot>
    )
  }
}

export default BookerGraph
