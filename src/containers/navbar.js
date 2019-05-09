import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  handleClick = (event) => {
    event.preventDefault();
    document.querySelector('#sidebar-wrapper').classList.toggle("active");
    document.querySelectorAll(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").forEach(el => {
      el.classList.toggle("fa-bars");
      el.classList.toggle("fa-times")
    });
    event.target.classList.toggle("active");
  }

  handleLinkClick = (event) => {
    document.querySelector('#sidebar-wrapper').classList.remove("active");
    document.querySelector('.menu-toggle').classList.remove("active");
    document.querySelector('.menu-toggle').classList.remove("active");
    document.querySelectorAll(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").forEach(el => {
      el.classList.toggle("fa-bars");
      el.classList.toggle("fa-times")
    });
  //   $("#sidebar-wrapper").removeClass("active");
  //   $(".menu-toggle").removeClass("active");
  //   $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  // });
  }

  render() {
    return(
      <>
      <a className="menu-toggle rounded" onClick={this.handleClick} href="#">
        <i className="fas fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a className="js-scroll-trigger" href="#page-top">[Funny App Name]</a>
          </li>
          <li onClick={this.handleLinkClick} className="sidebar-nav-item">
            <Link to='/about' className="js-scroll-trigger">About</Link>
          </li>
          <li onClick={this.handleLinkClick} className="sidebar-nav-item">
            <Link to='/home' className="js-scroll-trigger">Home</Link>
          </li>
          <li onClick={this.handleLinkClick} className="sidebar-nav-item">
            <Link to='/policy' className="js-scroll-trigger">Policy Information</Link>
          </li>
        </ul>
      </nav>
    </>
    )
  }
}

export default NavBar
