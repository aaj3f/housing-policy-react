import React, { Component } from 'react'
import UseEstimator from '../components/useEstimator'
import { connect } from 'react-redux'
import { Textfit } from 'react-textfit'

class PoliciesHeader extends Component {

  renderHeader = () => {
    if (Object.keys(this.props.user).length === 0) {
      return(<UseEstimator />)
    } else {
      let medianIncome = this.props.user.median_income
      let displayMedianIncome = this.displayNum(medianIncome)
      let fmr = this.props.user.fmr
      let displayFmr = this.displayNum(fmr)
      let salary = this.props.user.salary
      let displaySalary = this.displayNum(salary)
      let rentCost = this.props.user.rent_cost
      let displayRentCost = this.displayNum(rentCost)
      const compareIncome = () => "$" + this.displayNum(Math.abs(medianIncome - salary)) + (medianIncome > salary ? " below " : " above ") + "area average"
      const compareRent = () => "$" + this.displayNum(Math.abs(fmr - rentCost)) + (fmr > rentCost ? " below " : " above ") + "area fair market rent"
      return(
        <div className="container">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Your Data</h3>
            <h2 className="mx-auto mb-5">Info About Your Area Retrieved from<br/>The Dept of HUD & the US Census Bureau</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3 px-2">
                <Textfit mode="single">${displayFmr}</Textfit>
              </span>
              <h4>
                <strong>Fair Market Rent</strong>
              </h4>
              <p className="text-faded mb-0">for a {this.props.user.bedrooms}-bedroom unit</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <span className="service-icon rounded-circle mx-auto mb-3 px-2">
                <Textfit mode="single">${displayRentCost}</Textfit>
              </span>
              <h4>
                <strong>Your Rent Cost</strong>
              </h4>
              <p className="text-faded mb-0">{compareRent()}</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3 px-2">
                <Textfit mode="single">${displayMedianIncome}</Textfit>
              </span>
              <h4>
                <strong>Median Income</strong>
              </h4>
              <p className="text-faded mb-0">for the {this.props.user.zipcode} area</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span className="service-icon rounded-circle mx-auto mb-3 px-2">
                <Textfit mode="single">${displaySalary}</Textfit>
              </span>
              <h4>
                <strong>Your Income</strong>
              </h4>
              <p className="text-faded mb-0">{compareIncome()}</p>
            </div>
          </div>
        </div>
      )
    }
  }

  displayNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  render() {
    return(
      <section className="content-section bg-primary text-white text-center" id="services">
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
