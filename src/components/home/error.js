import React, { Component } from 'react'

class Error extends Component {

  scrollViewportDown() {
    setTimeout(() => {
      document.querySelector('#portfolio').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth'})
    }, 100)
  }

  componentDidUpdate() {
    if (!this.props.loading) {
      this.scrollViewportDown()
    }
  }

  componentDidMount() {
    if (!this.props.loading) {
      this.scrollViewportDown()
    }
  }

  render() {
    return(
      <section className="content-section" id="portfolio" style={{ background: "grey"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h1 style={{ color: "red" }}>ERROR!</h1>
              <p style={{ color: "white"}}>There has been an error caused by data from the Census Bureau and/or the Department of Housing and Urban Development. Please try again later.</p>
            </div>
            <div id="bottom-el"></div>
          </div>
        </div>
      </section>
    )
  }
}

export default Error
