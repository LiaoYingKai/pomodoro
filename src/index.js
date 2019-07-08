import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import './style.scss'

import Layout from './layout'

ReactDOM.render((
  <Router>
    <Route path="/" component={Layout}></Route>
  </Router>
), document.getElementById('App'))