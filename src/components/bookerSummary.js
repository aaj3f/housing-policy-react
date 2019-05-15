import React, { Component } from 'react'

class BookerSummary extends Component {

  render() {
    return(
      <React.Fragment>
        <h2>Main Policy Goals</h2>
        <p className="text-center text-justify">To provide rent relief to anyone who...<br/><br/><span style={{ fontSize: "1.4rem" }}>(1) pays more than 30% of their monthly income on rent (*)</span><br/><br/>Booker's policy would also improve affordable housing zoning laws and offer "Rainy Day" savings opportunities to its recipients.<br/><br/>To learn more about his policy and its benefits<br/><a href="https://www.congress.gov/bill/115th-congress/senate-bill/3342/text" target="_blank">read it in full</a><br/>Or read the Data For Progress analysis of it<br/><a href="http://filesforprogress.org/memos/housing/Booker_DFP_memo.pdf" target="_blank">available as a PDF</a></p>
      </React.Fragment>
    )
  }
}

export default BookerSummary
