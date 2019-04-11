/* eslint-disable global-require */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider as ReduxProvider } from 'react-redux'
import 'vendor'
import 'app-styles/main'

import configureStore from './store/configureStore'
import App from './components/App'
import { initialize } from './utils/initializer'

const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)

// Do some global configuration before starting
initialize()

render(
  <ReduxProvider store={store}>
    <Router>
      <App/>
    </Router>
  </ReduxProvider>,
  document.getElementById('cheers-container'),
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default
    render(
      <ReduxProvider store={store}>
        <Router>
          <NewApp/>
        </Router>
      </ReduxProvider>,
      document.getElementById('cheers-container'),
    )
  })
}
