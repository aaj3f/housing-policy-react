import React, { Component } from 'react'

class BookerSummary extends Component {

  render() {
    return(
      <React.Fragment>
        <h2>Booker's Main Policy Goals</h2>
        <p>To provide rent relief to anyone who...<br/><br/><span style={{ "font-size": "1.4rem" }}>(1) pays more than 30% of their monthly income on rent (*)</span><br/><br/>Booker's policy additionally provides community development grants to ease zoning laws which restrict the construction of affordable housing<br/><br/>It also allows renters to defer portions of their tax credit to an interest-earning "Rainy Day" savings fund<br/><br/>(*) His policy does, however, provide a lower benefit to anyone who pays more for rent than the Fair Market Rent (FMR) evaluation for their area.</p>
      </React.Fragment>
    )
  }
}

export default BookerSummary
