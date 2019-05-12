import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UseEstimator extends Component {

  render() {
    return(
      <div className="content-section-heading">
        <h3 className="text-secondary mb-0">Your Data</h3>
        <h2 className="mx-auto mb-5">For Personalized Information About Your Neighborhood,<br/>Use Our Policy Benefits Estimator:</h2>
        <Link to="/home" href="#" className="btn btn-xl btn-light">Let's do it!</Link>
      </div>
    )
  }
}

export default UseEstimator
