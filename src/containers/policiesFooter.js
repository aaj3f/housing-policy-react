import React, { Component } from 'react'
import UseEstimator from '../components/useEstimator'
import GraphContainer from './graphContainer'
import { connect } from 'react-redux'

class PoliciesFooter extends Component {

  scrollViewportDown() {
    setTimeout(() => {
      document.querySelector('#policies-footer').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth'})
    }, 100)
  }

  componentDidMount() {
    this.scrollViewportDown()
  }

  componentDidUpdate() {
    this.scrollViewportDown()
  }

  renderH2 = () => {
    let h2
    switch (this.props.match.params.policyId) {
      case "warren":
        h2 = "Elizabeth Warren's Policy"
        break;
      case "booker":
        h2 = "Cory Booker's Policy"
        break;
      case "harris":
        h2 = "Kamala Harris' Policy"
        break;
      default:
      h2 = "No Policy Exists by That Name"
    }

    return(
      <h2 className="mx-auto mb-5">{h2}</h2>
    )
  }

  renderGraph() {
    if (Object.keys(this.props.user).length === 0) {
      return(<UseEstimator />)
    } else {
      return(<GraphContainer match={this.props.match}/>)
    }
  }

  render() {
    return(
      <section className="content-section bg-policies-footer text-white text-center" id="policies-footer">
        <div className="container">
          <div className="content-section-heading">
            <h3 id="footer-secondary" className="mb-0">Policy Info</h3>
            {this.renderH2()}
            {this.renderGraph()}
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user
  })
}

export default connect(mapStateToProps)(PoliciesFooter)
