import React, { Component } from 'react'

class About extends Component {

  render() {
    return(
      <section class="content-section bg-light" id="about">
        <div class="container text-center text-justify">
          <div class="row">
            <div class="about col-lg-10 mx-auto">
              <h2>[This Cleverly Named App] makes housing policy accessible for you!</h2>
              <p class="lead">Too many people struggle to afford the cost of rent today. Some people in Congress are trying to change that, but the policies they've proposed can seem dense and overly abstract.<br/><br/>This app exists to make that information more accessible, and to give you a sense for how federal housing policy could provide real assitance and relief for you and your community.</p>
              <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
