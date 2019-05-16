import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserData from '../../components/home/userData'

class UserContainer extends Component {

  render() {
    return(
      <section className="content-section" id="portfolio">
        <div className="container">
          <UserData user={this.props.user} />
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user,
    loading: state.userReducer.loading
  })
}

export default connect(mapStateToProps)(UserContainer)
