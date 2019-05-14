import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormContainer from './formContainer'
import UserContainer from './userContainer'
import ScrollToTop from '../components/scrollToTop'

class Home extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <FormContainer />
        {Object.keys(this.props.user).length === 0 ? null : <UserContainer />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user
  })
}

export default connect(mapStateToProps)(Home)
