import React, { Component } from 'react'
import { connect } from 'react-redux'

class PoliciesBody extends Component {

  render() {
    return(
      <section class="content-section bg-primary" id="policy-selector">
        <div class="policies-selection container text-center">
          <h2 class="mb-4">Whose housing policy are you interested in reading about...</h2>
          <a href="#" class="btn btn-xl btn-dark mx-2 mb-2">Elizabeth Warren</a>
          <a href="#" class="btn btn-xl btn-dark mx-2 mb-2">Cory Booker</a>
          <a href="#" class="btn btn-xl btn-dark mx-2 mb-2">Kamala Harris</a>
        </div>
      </section>
    )
  }
}

export default connect()(PoliciesBody)
