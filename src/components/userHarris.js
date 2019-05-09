import React, { Component } from 'react'

class UserHarris extends Component {

  renderH2 = () => {
    if (this.props.user.harrisCredit) {
      return(<h2 className="sub-caption">You Would Qualify!</h2>)
    } else {
      return(<h2 className="sub-caption">You Don't Seem to Qualify</h2>)
    }
  }

  renderP = () => {
    if (this.props.user.harrisCredit) {
      return(
        // <p className="mb-0">Kamala Harris' proposed policy would provide you with an annual tax credit of<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${Math.round(this.props.user.harrisCredit) * 12}<br/>to help make the cost of rent more affordable for you.</p>
        <p className="mb-0">Harris' policy tries to keep the price of rent affordable by offering you an estimated tax credit of:<br/><br/><span className="emphatic-font">${Math.round(this.props.user.harrisCredit)} / Year</span><br/><br/>Click here to learn more</p>
      )
    } else {
      return(
        <p className="mb-0"><br/>Harris' policy only provides benefits for those earning less than $100k/yr (or $125k in certain metro areas)<br/><br/>To learn why else you might not qualify, click here</p>
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
