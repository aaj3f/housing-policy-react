import React, { Component } from 'react'

class UserMain extends Component {

  renderMain = () => {
    console.log(this.props.user)
    let { warren, bookerCredit, harrisCredit } = this.props.user
    let h2, p1, p2, p3
    if ([warren, bookerCredit, harrisCredit].some(value => !!value)) {
      h2 = "You Would Qualify for Benefits Under:"
      p1 = (!!warren ? <p className="mb-0">Elizabeth Warren's Policy</p> : null)
      p2 = (!!bookerCredit ? <p className="mb-0">Cory Booker's Policy</p> : null)
      p3 = (!!harrisCredit ? <p className="mb-0">Kamala Harris' Policy</p> : null)
    } else {
      h2 = "You Don't Seem to Qualify for Benefits Under Any of the Proposed Policies..."
      p1 = "You can learn more about the policies & their eligibility conditions by clicking on them here."
    }
    return(
      <span className="caption-content">
        <h2>{h2}</h2>
        {p1}
        {p2}
        {p3}
      </span>
    )
  }

  render() {
    return(
      <div className="col-lg-6">
        <a className="portfolio-item" href="#">
          <span className="caption">
          {this.renderMain()}
          </span>
          <img className="img-fluid" src={require("../img/american-sticker.jpg")} alt="US Congress - Housing Policy" />
        </a>
      </div>
    )
  }
}

export default UserMain
