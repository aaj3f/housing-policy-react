import React, { Component } from 'react'

class UserHarris extends Component {

  render() {
    return(
      <div className="col-lg-6">
        <a className="portfolio-item" href="#">
          <span className="caption">
            <span className="caption-content">
              <h2>Workspace</h2>
              <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
            </span>
          </span>
          <img className="img-fluid" src={require("../img/harris.jpg")} alt="" />
        </a>
      </div>
    )
  }
}

export default UserHarris
