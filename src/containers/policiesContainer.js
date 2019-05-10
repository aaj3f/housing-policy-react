import React, { Component } from 'react'
import { connect } from 'react-redux'
import PoliciesHeader from './policiesHeader'
import PoliciesBody from './policiesBody'
import PoliciesFooter from './policiesFooter'

class PoliciesContainer extends Component {

  render() {
    return(
      <React.Fragment>
        <PoliciesHeader />
        <PoliciesBody />
        {this.renderFooter()}
      </React.Fragment>
    )
  }
}

export default connect()(PoliciesContainer)
