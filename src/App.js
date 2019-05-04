import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormContainer from './containers/formContainer'
import './App.css';

class App extends Component {
  render() {
    return(
      <header className="d-flex masthead">
        <FormContainer user={this.props.user}/>
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
