import React, { Component } from 'react';

class UserContainer extends Component {

  render() {
    return(
      <section className="content-section" id="portfolio">
        <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Stationary</h2>
                  <p className="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                </span>
              </span>
              <img className="img-fluid" src={require("../img/american-sticker.jpg")} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Ice Cream</h2>
                  <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                </span>
              </span>
              <img className="img-fluid" src={require("../img/warren.jpg")} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Strawberries</h2>
                  <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                </span>
              </span>
              <img className="img-fluid" src={require("../img/booker.jpg")} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Workspace</h2>
                  <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                </span>
              </span>
              <img className="img-fluid" src={require("../img/harris.jpg")} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default UserContainer
