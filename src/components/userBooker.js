import React, { Component } from 'react'

class UserBooker extends Component {

  renderH2 = () => {
    if (this.props.user.bookerCredit) {
      return(<h2>You Would Qualify!</h2>)
    } else {
      return(<h2>You Don't Appear to Qualify</h2>)
    }
  }

  // renderP = () => {
  //   if () {
  //     return()
  //   } else {
  //
  //   }
  // }

  render() {
    return(
      <div className="col-lg-6">
        <a className="portfolio-item" href="#">
          <span className="caption">
            <span className="caption-content">
              {this.renderH2()}
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
