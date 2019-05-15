import React, { Component } from 'react'
import { connect } from 'react-redux'
import WarrenGraph from '../components/warrenGraph'
import BookerGraph from '../components/bookerGraph'
import HarrisGraph from '../components/harrisGraph'

class GraphContainer extends Component {

  scrollViewportDown() {
    setTimeout(() => {
      document.querySelector('#policies-footer').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth'})
    }, 500)
  }

  componentDidMount() {
    this.scrollViewportDown()
  }

  componentDidUpdate() {
    this.scrollViewportDown()
  }

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
