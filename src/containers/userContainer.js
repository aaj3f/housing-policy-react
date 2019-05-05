import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserContainer extends Component {

  renderMain = () => {
    let { warren, booker, harris } = this.props.user
    let h2, p
    if ([warren, booker, harris].some(value => !!value)) {
      h2 = "You Would Qualify for Benefits Under:"
      p = ''
      p += (!!warren ? "Elizabeth Warren's Policy" : '')
      p += (!!booker ? "<br/>Cory Booker's Policy" : '')
      p += (!!harris ? "<br/>Kamala Harris' Policy" : '')
    } else {
      h2 = "You Don't Seem to Qualify for Benefits Under Any of the Proposed Policies..."
      p = "You can learn more about the policies & their eligibility conditions by clicking on them here."
    }
    return(
      <span className="caption-content">
        <h2>{h2}</h2>
        <p className="mb-0">{p}</p>
      </span>
    )
  }

  render() {
    return(
      <section className="content-section" id="portfolio">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <a className="portfolio-item" href="#">
                <span className="caption">
                  {this.renderMain()}
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

const mapStateToProps = state => {
  return({
    user: state.userReducer.user
  })
}

export default connect(mapStateToProps)(UserContainer)
