import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserData from '../../components/home/userData'

class UserContainer extends Component {

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

  // componentDidMount() {
  //   if (!this.props.loading) {
  //     this.scrollViewportDown()
  //   }
  // }

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
