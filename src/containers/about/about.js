import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {


  render() {
    return(
      <section className="content-section bg-light" id="about">
        <div className="container text-center text-justify">
          <div className="row">
            <div className="about col-lg-10 mx-auto">
              <h1><em>affordable</em></h1>
              <h2 className="mb-3"><br/>makes housing policy accessible for you!</h2>
              <p className="lead">Too many people struggle to afford the cost of rent today. Some people in Congress are trying to change that, but the policies they've proposed can seem dense and overly abstract.<br/><br/>This app exists to make that information more accessible, and to give you a sense for how federal housing policy could provide real assistance and relief for you and your community.</p>
              <Link className="btn btn-dark btn-xl js-scroll-trigger" to="/home">Let's Get Started!</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
