import React, { Component } from 'react'

class About extends Component {

  render() {
    return(
      <section class="content-section bg-light" id="about">
        <div class="container text-center text-justify">
          <div class="row">
            <div class="about col-lg-10 mx-auto">
              <h2>[This Cleverly Named App] is here to make housing policy accessible for you!</h2><br/>
              <p class="lead mb-5">Too many people struggle to afford the cost of rent today. And even though some great people are drafting some great policies to address this issue, it's tough to understand what those policies would do for you or for communities around the nation.<br/><br/>This app is here for you. We built it to make complex policy numbers more accessible, and to give people an estimate for how they might benefit under variously proposed federal housing policies.</p>
              <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
