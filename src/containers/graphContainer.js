import React, { Component } from 'react'
import { connect } from 'react-redux'
import WarrenGraph from '../components/warrenGraph'
import BookerGraph from '../components/bookerGraph'
import HarrisGraph from '../components/harrisGraph'

class GraphContainer extends Component {

  renderGraph = () => {
    switch (this.props.match.params.policyId) {
      case "warren":
        return <WarrenGraph />
      case "booker":
        return <BookerGraph />
      case "harris":
        return <HarrisGraph />
      default:
      return null;
    }
  }

  render() {
    return(
      this.renderGraph()
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user
  })
}

export default connect(mapStateToProps)(GraphContainer);
