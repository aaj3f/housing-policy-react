import React, { Component } from 'react'

class WarrenSummary extends Component {

  render() {
    return(
      <React.Fragment>
        <h2>Main Policy Goals</h2>
        <p className="text-center text-justify">To provide downpayment assistance to anyone who...<br/><br/><span style={{ fontSize: "1.4rem" }}>(1) makes less than 120% their area's median income<br/>(2) lives in a low-income or<br/>historically red-lined area</span><br/><br/>Warren's Policy also expands Fair Housing Act protections, improves funding & zoning for affordable housing, and would pay for itself through estate tax reform.<br/><br/>To learn more about her policy and its benefits<br/><a href="https://www.congress.gov/bill/115th-congress/senate-bill/3503/text" target="_blank">read it in full</a><br/>Or read the Data For Progress analysis of it<br/><a href="http://filesforprogress.org/memos/housing/Warren_DFP_memo.pdf" target="_blank">available as a PDF</a></p>
      </React.Fragment>
    )
  }
}

export default WarrenSummary
