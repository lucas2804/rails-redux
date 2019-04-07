import React from 'react'
import { Route } from 'react-router'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'

export default (
  <Route path="/" component={HomePage}>
    <Route path="/about" component={AboutPage}/>
  </Route>
)
