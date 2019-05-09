import React, { Component } from 'react'

class UserWarren extends Component {

  renderH2 = () => {
    if (this.props.user.warren) {
      return(<h2 className="sub-caption">You Would Qualify!</h2>)
    } else {
      return(<h2 className="sub-caption">You Don't Seem to Qualify</h2>)
    }
  }

  renderP = () => {
    if (this.props.user.warren) {
      return(
        // <p className="mb-0">If you would be<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1) a first-time homebuyer<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2) purchasing a home in a low-income or<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;historically red-lined neighborhood<br/>this policy would pay the 3.5% downpayment on your home for you, qualifying you for FHA protections on your mortgage.</p>
        <p className="mb-0">Warren's policy would offer first-time homebuyers a government-paid downpayment of up to:<br/><br/><span className="emphatic-font">3.5% of the property value</span><br/><br/>Click here to learn more</p>
      )
    } else {
      return(
        <p className="mb-0"><br/>Warren's policy only applies to persons earning less than 120% the average income in their area.<br/><br/>To learn why else you might not qualify, click here</p>
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
