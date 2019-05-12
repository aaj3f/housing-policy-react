import React, { Component } from 'react'
import { connect } from 'react-redux'
import PoliciesHeader from './policiesHeader'
import PoliciesBody from './policiesBody'
import PoliciesFooter from './policiesFooter'
import ScrollToTop from '../components/scrollToTop'
import policiesReducer from '../actions/policiesReducer'
import { Route } from 'react-router-dom'

class PoliciesContainer extends Component {

  render() {
    // debugger;
    return(
      <React.Fragment>
        <ScrollToTop />
        <PoliciesHeader />
        <PoliciesBody match={this.props.match}/>
        <Route path={`${this.props.match.path}/:policyId`} component={PoliciesFooter} match={this.props.match} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.userReducer.user
  })
}

export default connect(mapStateToProps, { policiesReducer })(PoliciesContainer)
