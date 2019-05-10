import React, { Component } from 'react'
import { connect } from 'react-redux'

class PoliciesFooter extends Component {

  render() {
    return(
      <section className="content-section bg-policies-footer text-white text-center" id="policies-footer">
        <div className="container">
          <div className="content-section-heading">
            <h3 id="footer-secondary" className="mb-0">Your Data</h3>
            <h2 className="mx-auto mb-5">Info About Your Area Retrieved from<br/>The Dept of HUD & the US Census Bureau</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default connect()(PoliciesFooter)
