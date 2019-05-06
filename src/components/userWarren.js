import React, { Component } from 'react'

class UserWarren extends Component {

  render() {
    return(
      <div className="col-lg-6">
        <a className="portfolio-item" href="#">
          <span className="caption">
            <span className="caption-content">
              <h2>Ice Cream</h2>
              <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
            </span>
          </span>
          <img className="img-fluid" src={require("../img/warren.jpg")} alt="" />
        </a>
      </div>
    )
  }
}

export default UserWarren
