import React, { Component } from 'react';
// import '../../node_modules/react-vis/dist/style.css';
// import {XYPlot, LineSeries} from 'react-vis';
import { Table } from 'react-bootstrap'

class WarrenGraph extends Component {

  displayNum = num => num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")


  render() {

    const renderP = () => {
      if (isUser) {
        return(
          `Your annual income of $${this.displayNum((Math.round(salaryNum)).toString())} qualifies you for benefits under this policy. The table below is an example of the government assistance you could recieve if purchasing a new home.`
        )
      } else {
        return(
          `Your annual income is above the threshhold to qualify for benefits under this policy. The table below is an example of a qualifying individual with an income of $${this.displayNum((Math.round(salaryNum)).toString())}`
        )
      }
    }

    const salaryNum = this.props.graphData.salary
    const isUser = this.props.graphData.flag
    const [house1, benefit1, house2, benefit2, house3, benefit3] = [
      (Math.round(salaryNum * 3.5)).toString(),
      (Math.round(0.035 * (salaryNum * 3.5))).toString(),
      (Math.round(salaryNum * 4.2)).toString(),
      (Math.round(0.035 * (salaryNum * 4.2))).toString(),
      (Math.round(salaryNum * 5)).toString(),
      (Math.round(0.035 * (salaryNum * 5))).toString()
    ]
    return(
      <React.Fragment>
        <p className="text-center text-justify">{renderP()}</p>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Property Value<br/>of a New Home</th>
              <th>Govt-Assistance<br/>for Downpayment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${ this.displayNum(house1) }</td>
              <td>${ this.displayNum(benefit1) }</td>
            </tr>
            <tr>
              <td>${ this.displayNum(house2) }</td>
              <td>${ this.displayNum(benefit2) }</td>
            </tr>
            <tr>
              <td>${ this.displayNum(house3) }</td>
              <td>${ this.displayNum(benefit3) }</td>
            </tr>
          </tbody>
        </Table>
      </React.Fragment>
    )
  }
}

export default WarrenGraph
