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
        <p className="mb-0">If you would be<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1) a first-time homebuyer<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2) purchasing a home in a low-income or<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;historically red-lined neighborhood<br/>this policy would pay the 3.5% downpayment on your home for you, qualifying you for FHA protections on your mortgage.</p>
      )
    } else {
      return(
        <p className="mb-0"><br/>Elizabeth Warren's policy would only provide benefits for those making less than 120% the average income in their area.<br/><br/>To learn why else you might not qualify, or to<br/>read more about her proposed policy, click here</p>
      )
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
