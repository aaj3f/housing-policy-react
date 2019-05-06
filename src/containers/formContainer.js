import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormHeader from '../components/formHeader'
import UserForm from '../components/userForm'
import LoadingDisplay from '../components/loadingDisplay'

class FormContainer extends Component {

  render() {
    return(
      <header className="d-flex masthead">
        <div className="container text-center my-auto">
          <FormHeader />
          {this.props.loading ? <LoadingDisplay /> : <UserForm user={this.props.user}/>}
        </div>
        <div className="overlay"></div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user,
    loading: state.userReducer.loading
  })
}

export default connect(mapStateToProps)(FormContainer)
