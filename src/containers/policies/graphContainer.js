import React, { Component } from 'react'
import { connect } from 'react-redux'
import WarrenGraph from '../../components/policies/warrenGraph'
import BookerGraph from '../../components/policies/bookerGraph'
import HarrisGraph from '../../components/policies/harrisGraph'

class GraphContainer extends Component {


  renderGraph = () => {
    switch (this.props.match.params.policyId) {
      case "warren":
        return <WarrenGraph graphData={this.props.user.graphData.warrenGraphData} />
      case "booker":
        return <BookerGraph mainGraph={this.props.user.graphData.bookerGraphData} subGraph={this.props.user.graphData.harrisGraphData} />
      case "harris":
        return <HarrisGraph mainGraph={this.props.user.graphData.harrisGraphData} subGraph={this.props.user.graphData.bookerGraphData} />
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
