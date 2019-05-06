import React, { Component } from 'react'
import FormHeader from '../components/formHeader'
import UserForm from '../components/userForm'

class FormContainer extends Component {
  render() {
    return(
      <header className="d-flex masthead">
        <div className="container text-center my-auto">
          <FormHeader />
          <UserForm user={this.props.user}/>
        </div>
        <div className="overlay"></div>
      </header>
    )
  }
}

export default FormContainer
