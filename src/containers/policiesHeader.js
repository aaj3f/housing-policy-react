import React, { Component } from 'react'
import { connect } from 'react-redux'

class PoliciesHeader extends Component {

  render() {
    return(
      <h1>Policies Header</h1>
    )
  }
}

export default connect()(PoliciesHeader)
