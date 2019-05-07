import React, { Component } from 'react'

class UserBooker extends Component {

  renderH2 = () => {
    if (this.props.user.bookerCredit) {
      return(<h2>You Would Qualify!</h2>)
    } else {
      return(<h2>You Don't Appear to Qualify</h2>)
    }
  }

  renderP = () => {
    if (this.props.user.bookerCredit) {
      return(
        <p className="mb-0">Cory Booker's proposed policy would provide you with an annual tax credit of<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${Math.round(this.props.user.bookerCredit) * 12}<br/>to help make the cost of rent more affordable for you.</p>
      )
    } else {
      return(
        <p className="mb-0"><br/>Cory Booker's policy would only provide benefits for those spending more than 30% of their monthly income on rent.<br/><br/>To learn why else you might not qualify, or to<br/>read more about his proposed policy, click here</p>
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
          <img className="img-fluid" src={require("../img/booker.jpg")} alt="" />
        </a>
      </div>
    )
  }
}

export default UserBooker
