import React, { Component } from 'react'
import UserMain from './userMain'
import UserWarren from './userWarren'
import UserBooker from './userBooker'
import UserHarris from './userHarris'

class UserData extends Component {

  scrollViewportDown() {
    setTimeout(() => {
      document.querySelector('#portfolio').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth'})
    }, 1000)
  }

  componentDidMount() {
    this.scrollViewportDown();
  }

  componentDidUpdate() {
    this.scrollViewportDown();
  }

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
