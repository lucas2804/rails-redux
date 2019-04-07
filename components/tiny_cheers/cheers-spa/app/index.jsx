/* eslint-disable global-require */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import 'vendor';
import 'app-styles/main';

import configureStore from './store/configureStore';
import Root from './components/Root';
import { initialize } from './utils/initializer';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// Do some global configuration before starting
initialize();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('cheers-container'),
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('cheers-container'),
    );
  });
}
