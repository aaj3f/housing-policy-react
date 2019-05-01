import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserForm from './components/userForm'
import './App.css';

class App extends Component {
  render() {
    return(
      <UserForm user={this.props.user}/>
    )
  }
}

const mapStateToProps = state => {
  return(
    { user: state.userReducer.user }
  )
}

export default connect(mapStateToProps)(App);
