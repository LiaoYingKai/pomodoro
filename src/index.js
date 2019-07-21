import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import pomodoro from './reducers'

import './style.scss'

import Layout from './layout'
let store = createStore(
  pomodoro,
  applyMiddleware(logger)
)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={Layout}></Route>
    </Router>
  </Provider>
), document.getElementById('App'))