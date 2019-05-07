import React, { Component } from 'react'

class UserHarris extends Component {

  renderH2 = () => {
    if (this.props.user.harrisCredit) {
      return(<h2>You Would Qualify!</h2>)
    } else {
      return(<h2>You Don't Appear to Qualify</h2>)
    }
  }

  renderP = () => {
    if (this.props.user.harrisCredit) {
      return(
        <p className="mb-0">Kamala Harris' proposed policy would provide you with an annual tax credit of<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${Math.round(this.props.user.harrisCredit) * 12}<br/>to help make the cost of rent more affordable for you.</p>
      )
    } else {
      return(
        <p className="mb-0"><br/>Kamala Harris' policy would only provide benefits for those making less than $100,000/yr (or $125,000 in certain metropolitan areas).<br/><br/>To learn why else you might not qualify, or to<br/>read more about her proposed policy, click here</p>
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
          <img className="img-fluid" src={require("../img/harris.jpg")} alt="" />
        </a>
      </div>
    )
  }
}

export default UserHarris
