import React, { Component } from 'react'
import { connect } from 'react-redux'

class PoliciesBody extends Component {

  render() {
    return(
      <h1>Policies Body</h1>
    )
  }
}

export default connect()(PoliciesBody)
