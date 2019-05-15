import React, { Component } from 'react'

class WarrenSummary extends Component {

  render() {
    return(
      <React.Fragment>
        <h2>Main Policy Goals</h2>
        <p className="text-center text-justify">To provide downpayment assistance to anyone who...<br/><br/><span style={{ fontSize: "1.4rem" }}>(1) makes less than 120% the median income in their area<br/>(2) lives in a low-income or historically red-lined neighborhood</span><br/><br/>That downpayment also ensures Fair Housing Act (FHA) protections to new homebuyers to prevent unfair mortgage practices, and her policy expands on those protections for minorities and Section 8 recipients.<br/><br/>Her policy also dedicates $470 billion to building & rehabilitating the nation's affordable housing developments, also creating incentive funds for cities to invest further in those developments.<br/><br/>Finally, her policy is the only one to propose a sufficient plan for covering the cost of these benefits, by restoring Bush Administration-era estates taxes.</p>
      </React.Fragment>
    )
  }
}

export default WarrenSummary
