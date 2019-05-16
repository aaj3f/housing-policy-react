import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormHeader from '../../components/home/formHeader'
import UserForm from '../../components/home/userForm'
import LoadingDisplay from '../../components/home/loadingDisplay'

class FormContainer extends Component {

  scrollViewportDown() {
    setTimeout(() => {
      document.querySelector('#portfolio').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth'})
    }, 1000)
  }

  componentDidUpdate() {
    if (!this.props.loading) {
      this.scrollViewportDown()
    }
  }

  render() {
    return(
      <header className="d-flex masthead" style={{ minHeight: "100vh" }}>
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
