import React, { Component } from 'react'
import { connect } from 'react-redux'

class PoliciesContainer extends Component {

  render() {
    return(
      <h1>Policies Container</h1>
    )
  }
}

export default connect()(PoliciesContainer)
