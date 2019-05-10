import React, { Component } from 'react'
import { connect } from 'react-redux'
import PoliciesHeader from './policiesHeader'
import PoliciesBody from './policiesBody'

class PoliciesContainer extends Component {

  render() {
    return(
      <React.Fragment>
        <PoliciesHeader />
        <PoliciesBody />
      </React.Fragment>
    )
  }
}

export default connect()(PoliciesContainer)
