import React, { Component } from 'react'
import { connect } from 'react-redux'
import PoliciesFooter from './policiesFooter'
import { Link } from "react-router-dom";

class PoliciesBody extends Component {

  render() {
    return(
      <React.Fragment>
        <section className="content-section bg-primary" id="policy-selector">
          <div className="policies-selection container text-center">
            <h2 className="mb-4">Whose housing policy are you interested in reading about...</h2>
            <Link to={`${this.props.match.url}/warren`} className="btn btn-xl btn-dark mx-2 mb-2">Elizabeth Warren</Link>
            <Link to={`${this.props.match.url}/booker`} className="btn btn-xl btn-dark mx-2 mb-2">Cory Booker</Link>
            <Link to={`${this.props.match.url}/harris`} className="btn btn-xl btn-dark mx-2 mb-2">Kamala Harris</Link>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default connect()(PoliciesBody)
