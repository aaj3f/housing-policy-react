import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  render() {
    return null
  }
}

export default ScrollToTop
