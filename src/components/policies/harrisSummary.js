import React, { Component } from 'react'

class HarrisSummary extends Component {

  render() {
    return(
      <React.Fragment>
        <h2>Main Policy Goals</h2>
        <p className="text-center text-justify">To provide rent relief to anyone who...<br/><br/><span style={{ fontSize: "1.4rem" }}>(1) makes less than $100k/year<br/>(or $125k in expensive metro areas)<br/>(2) pays more than 30% of income on rent</span><br/><br/>To learn more about her policy<br/><a href="https://www.congress.gov/bill/115th-congress/senate-bill/3250/text" target="_blank">read it in full</a><br/>Or read the Data For Progress analysis<br/><a href="http://filesforprogress.org/memos/housing/Harris_DFP_memo.pdf" target="_blank">available as a PDF</a></p>
      </React.Fragment>
    )
  }
}

export default HarrisSummary
