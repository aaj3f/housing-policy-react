import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import About from './containers/about';
import NavBar from './containers/navbar';
import PoliciesContainer from './containers/policiesContainer'
import rootReducer from './reducers/index'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={About} />
      <Route path="/about" component={About} />
      <Route path="/home" component={App} />
      <Route path="/policies" component={PoliciesContainer} />
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
