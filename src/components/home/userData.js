import React, { Component } from 'react'
import UserMain from './userMain'
import UserWarren from './userWarren'
import UserBooker from './userBooker'
import UserHarris from './userHarris'

class UserData extends Component {

  render() {
    return(
      <div className="row no-gutters">
        <UserMain user={this.props.user} />
        <UserWarren user={this.props.user} />
        <UserBooker user={this.props.user} />
        <UserHarris user={this.props.user} />
        <div id="bottom-el"></div>
      </div>
    )
  }
}

export default UserData
