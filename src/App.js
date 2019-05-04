import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserForm from './components/userForm'
import FormHeader from './components/formHeader'
import './App.css';

class App extends Component {
  render() {
    return(
      <header className="d-flex masthead">
        <container className="container text-center my-auto">
          <FormHeader />
          <UserForm user={this.props.user}/>
        </container>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return(
    { user: state.userReducer.user }
  )
}

export default connect(mapStateToProps)(App);
