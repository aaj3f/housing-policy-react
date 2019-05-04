import React, { Component } from 'react'
import FormHeader from '../components/formHeader'
import UserForm from '../components/userForm'

class FormContainer extends Component {
  render() {
    return(
      <container className="container text-center my-auto">
        <FormHeader />
        <UserForm user={this.props.user}/>
      </container>
    )
  }
}

export default FormContainer
