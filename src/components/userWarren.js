import React, { Component } from 'react'

class UserWarren extends Component {

  renderH2 = () => {
    if (this.props.user.warren) {
      return(<h2>You Would Qualify!</h2>)
    } else {
      return(<h2>You Don't Appear to Qualify</h2>)
    }
  }

  renderP = () => {
    if (this.props.user.warren) {
      return(
        <p className="mb-0">If you would be
        <ul>
          <li>a first-time homebuyer</li>
          <li>looking to purchase a home in a low-income or historically red-lined neighborhood</li>
        </ul>
        this policy would pay the 3.5% downpayment on your home for you, qualifying you for FHA protections on your mortgage.</p>
      )
    } else {

    }
  }

  render() {
    return(
      <div className="col-lg-6">
        <a className="portfolio-item" href="#">
          <span className="caption">
            <span className="caption-content">
              {this.renderH2()}
              {this.renderP()}
            </span>
          </span>
          <img className="img-fluid" src={require("../img/warren.jpg")} alt="" />
        </a>
      </div>
    )
  }
}

export default UserWarren
