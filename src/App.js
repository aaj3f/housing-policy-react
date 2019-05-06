import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormContainer from './containers/formContainer'
import UserContainer from './containers/userContainer'
import './App.css';

class App extends Component {

  displayLogic = () => {
    if (Object.keys(this.props.user).length === 0 && !this.props.loading) {
      return(null)
    } else {
      return(<UserContainer />)
    }
  }

  render() {
    return(
      <div>
        <FormContainer user={this.props.user} />
        {this.displayLogic()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user,
    loading: state.userReducer.loading })
}

export default connect(mapStateToProps)(App);
