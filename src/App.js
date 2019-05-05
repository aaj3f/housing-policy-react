import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormContainer from './containers/formContainer'
import LoadingContainer from './containers/loadingContainer'
import './App.css';

class App extends Component {

  displayLogic = () => {
    if (Object.keys(this.props.user).length === 0 && !this.props.loading) {
      return(<FormContainer user={this.props.user}/>)
    } else if (this.props.loading) {
      return(<LoadingContainer />)
    } else {
      return(<FormContainer user={this.props.user}/>)
    }
  }
  render() {
    return(
      <header className="d-flex masthead">
        {this.displayLogic()}
      </header>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user,
    loading: state.userReducer.loading })
}

export default connect(mapStateToProps)(App);
