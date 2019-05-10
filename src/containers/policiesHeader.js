import React, { Component } from 'react'
import { connect } from 'react-redux'

class PoliciesHeader extends Component {

  renderHeader = () => {
    if (Object.keys(this.props.user).length === 0) {
      return(
        <h1>No User Here!</h1>
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
