import React, { Component } from 'react';
import Home from './containers/homeContainer'
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {

  render() {
    return(
      // <Navbar></Navbar>
      // {this.renderMain()}
      // <Router>
      //   <React.fragment>
      //     {/* <Navbar></Navbar> */}
      //     {/* <Route exact path='/' component={About} /> */}
      //     <Route path='/home' component={Home} />
      //
      //   </React.fragment>
      // </Router>
      <Home />
    )
  }
}

export default App;
