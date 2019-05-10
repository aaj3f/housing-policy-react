import React, { Component } from 'react'
import { connect } from 'react-redux'
import PoliciesHeader from './policiesHeader'
import PoliciesBody from './policiesBody'
import PoliciesFooter from './policiesFooter'
import { Route } from 'react-router-dom'

class PoliciesContainer extends Component {

  render() {
    // debugger;
    return(
      <React.Fragment>
        <PoliciesHeader />
        <PoliciesBody match={this.props.match}/>
        <Route path={`${this.props.match.path}/:policyId`} component={PoliciesFooter} match={this.props.match} />
      </React.Fragment>
    )
  }
}

export default connect()(PoliciesContainer)
