import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormContainer from './formContainer'
import UserContainer from './userContainer'
import Error from '../components/error'
import ScrollToTop from '../components/scrollToTop'

class Home extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <FormContainer />
        { this.props.error ? <Error /> : null }
        {Object.keys(this.props.user).length === 0 ? null : <UserContainer />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user,
    error: state.userReducer.error
  })
}

export default connect(mapStateToProps)(Home)
