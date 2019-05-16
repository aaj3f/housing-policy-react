import React, { Component } from 'react'
import UseEstimator from '../../components/policies/useEstimator'
import GraphContainer from './graphContainer'
import PolicySummary from './policySummary'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

class PoliciesFooter extends Component {
  

  scrollViewportDown() {
    setTimeout(() => {
      document.querySelector('#policies-footer').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth'})
    }, 500)
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
    } else if (this.props.loadingPolicy) {
      return(<div className="content-section-heading"><h2 className="mx-auto mb-5">Loading...</h2></div>)
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
            <div className="content-section-heading mb-5">
              <Row>
                <Col sm={12} lg={6} className="mb-5">
                  {this.renderGraph()}
                </Col>
                <Col>
                  <div className="mx-auto">
                    <PolicySummary match={this.props.match}/>
                  </div>
                </Col>
              </Row>
            </div>
            <button onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="btn btn-xl btn-light">Scroll to Top</button>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user,
    loadingPolicy: state.userReducer.loadingPolicy
  })
}

export default connect(mapStateToProps)(PoliciesFooter)
