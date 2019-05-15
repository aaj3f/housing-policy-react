import React, { Component } from 'react'

class HarrisSummary extends Component {

  render() {
    return(
      <React.Fragment>
        <h2>Main Policy Goals</h2>
        <p className="text-center text-justify">To provide rent relief to anyone who...<br/><br/><span style={{ fontSize: "1.4rem" }}>(1) makes less than $100k/year (or $125k in expensive metro areas)<br/>(2) pays more than 30% of their monthly income on rent</span><br/><br/>Her tax credit is more generous to those earning less money<br/><br/>It also applies to renters living in government-subsidized housing<br/><br/>It does not, however, apply to anyone paying more than 150% the evaluated Fair Market Rent (FMR) for the area.</p>
      </React.Fragment>
    )
  }
}

export default HarrisSummary
