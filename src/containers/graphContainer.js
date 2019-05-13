import React, { Component } from 'react'
import { connect } from 'react-redux'
import WarrenGraph from '../components/warrenGraph'
import BookerGraph from '../components/bookerGraph'
import HarrisGraph from '../components/harrisGraph'

class GraphContainer extends Component {

  renderGraph = () => {
    switch (this.props.match.params.policyId) {
      case "warren":
        return <WarrenGraph graphData={this.props.user.graphData.warrenGraphData} />
      case "booker":
        return <BookerGraph graphData={this.props.user.graphData.bookerGraphData} />
      case "harris":
        return <HarrisGraph graphData={this.props.user.graphData.harrisGraphData} />
      default:
      return null;
    }
  }

  render() {
    return(
      <div className="content-section-heading">
        {this.renderGraph()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user
  })
}

export default connect(mapStateToProps)(GraphContainer);
