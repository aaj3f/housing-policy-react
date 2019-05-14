import React, { Component } from 'react'
import WarrenSummary from '../components/warrenSummary'
import BookerSummary from '../components/bookerSummary'
import HarrisSummary from '../components/harrisSummary'
import { Route } from 'react-router-dom'

class PolicySummary extends Component {

  render() {
    // debugger;
    return(
      <React.Fragment>
        <Route path="/policies/warren" component={WarrenSummary} match={this.props.match} />
        <Route path="/policies/booker" component={BookerSummary} match={this.props.match} />
        <Route path="/policies/harris" component={HarrisSummary} match={this.props.match} />
      </React.Fragment>
    )
  }
}

export default PolicySummary
