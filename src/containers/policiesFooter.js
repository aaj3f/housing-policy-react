import React, { Component } from 'react'
import { connect } from 'react-redux'

class PoliciesFooter extends Component {

  scrollViewportDown() {
    setTimeout(() => {
      document.querySelector('#policies-footer').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth'})
    }, 1000)
  }

  componentDidMount() {
    this.scrollViewportDown()
  }

  componentDidUpdate() {
    this.scrollViewportDown()
  }

  renderH3 = () => {
    let h3
    switch (this.props.match.params.policyId) {
      case "warren":
        h3 = "Elizabeth Warren's Policy"
        break;
      case "booker":
        h3 = "Cory Booker's Policy"
        break;
      case "harris":
        h3 = "Kamala Harris' Policy"
        break;
      default:
      h3 = null
    }

    return(
      <h3 id="footer-secondary" className="mb-0">{h3}</h3>
    )
  }

  render() {
    return(
      <section className="content-section bg-policies-footer text-white text-center" id="policies-footer">
        <div className="container">
          <div className="content-section-heading">
            {this.renderH3()}
            <h2 className="mx-auto mb-5">Info About Your Area Retrieved from<br/>The Dept of HUD & the US Census Bureau</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default connect()(PoliciesFooter)
