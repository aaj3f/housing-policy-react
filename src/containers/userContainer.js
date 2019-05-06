import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserData from '../components/userData'
import LoadingDisplay from '../components/loadingDisplay'

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
          {this.props.loading ? <LoadingDisplay /> : <UserData user={this.props.user} />}
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
