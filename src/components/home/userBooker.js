import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserBooker extends Component {

  renderH2 = () => {
    if (this.props.user.bookerCredit) {
      return(<h2 className="sub-caption">You Would Qualify!</h2>)
    } else {
      return(<h2 className="sub-caption">You Don't Seem to Qualify</h2>)
    }
  }

  renderP = () => {
    if (this.props.user.bookerCredit) {
      return(
        // <p className="mb-0">Cory Booker's proposed policy would provide you with an annual tax credit of<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${Math.round(this.props.user.bookerCredit) * 12}<br/>to help make the cost of rent more affordable for you.</p>
        <p className="mb-0">Booker's policy tries to keep the price of rent affordable by offering you an estimated tax credit of:<br/><br/><span className="emphatic-font">${Math.round(this.props.user.bookerCredit)} / Year</span><br/><br/>Click here to learn more</p>
      )
    } else {
      return(
        <p className="mb-0"><br/>Booker's policy only provides benefits for those spending more than 30% of their income on rent.<br/><br/>To learn why else you might not qualify, click here</p>
      )
    }
  }

  render() {
    return(
      <div className="col-lg-6">
        <Link to='/policies/booker' className="portfolio-item">
          <span className="caption">
            <span className="caption-content">
              {this.renderH2()}
              {this.renderP()}
            </span>
          </span>
          <img className="img-fluid" src={require("../../img/booker.jpg")} alt=""/>
        </Link>
      </div>
    )
  }
}

export default UserBooker
