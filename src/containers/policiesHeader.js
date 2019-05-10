import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PoliciesHeader extends Component {

  renderHeader = () => {
    if (Object.keys(this.props.user).length === 0) {
      return(
        <div className="container text-center">
          <h2 className="mx-auto mb-5">For Personalized Information About Your Neighborhood,<br/>Use Our Policy Benefits Estimator:</h2>
          <Link to="/home" href="#" className="btn btn-xl btn-light">Let's do it!</Link>
        </div>
      )
    } else {
      let income = this.props.user.median_income
      let displayIncome = this.displayNum(income)
      return(
        <h1>The average income in your area is ${displayIncome}</h1>
      )
    }
  }

  displayNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  render() {
    return(
      <section class="content-section bg-primary text-white text-center" id="services">
        {this.renderHeader()}
      </section>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user
  })
}

export default connect(mapStateToProps)(PoliciesHeader)
