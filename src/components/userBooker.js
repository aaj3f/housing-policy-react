import React, { Component } from 'react'

class UserBooker extends Component {

  render() {
    return(
      <div className="col-lg-6">
        <a className="portfolio-item" href="#">
          <span className="caption">
            <span className="caption-content">
              <h2>Strawberries</h2>
              <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
            </span>
          </span>
          <img className="img-fluid" src={require("../img/booker.jpg")} alt="" />
        </a>
      </div>
    )
  }
}

export default UserBooker
