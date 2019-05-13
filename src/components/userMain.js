import React, { Component } from 'react'

class UserMain extends Component {

  renderMain = () => {
    console.log(this.props.user)
    let { warren, bookerCredit, harrisCredit } = this.props.user
    let h2, p1, p2, p3
    if ([warren, bookerCredit, harrisCredit].some(value => !!value)) {
      h2 = <h2>You Would Qualify for Benefits Under:</h2>
      p1 = (!!warren ? <p className="mb-1">Elizabeth Warren's Policy</p> : null)
      p2 = (!!bookerCredit ? <p className="mb-1">Cory Booker's Policy</p> : null)
      p3 = (!!harrisCredit ? <p className="mb-1">Kamala Harris' Policy</p> : null)
    } else {
      h2 = <h2>You Don't Seem to Qualify for Benefits Under Any of the Proposed Policies...</h2>
      p1 = <p className="mb-1">You can learn more about the policies & their eligibility conditions by clicking on them here.</p>
    }
    return(
      <span className="caption-content main-caption">
        {h2}
        {p1}
        {p2}
        {p3}
      </span>
    )
  }

  render() {
    return(
      <div className="col-lg-6">
        <Link to='/policies' className="portfolio-item">
          <span className="caption">
          {this.renderMain()}
          </span>
          <img className="img-fluid" src={require("../img/american-sticker.jpg")} alt="US Congress - Housing Policy" />
        </Link>
      </div>
    )
  }
}

export default UserMain
