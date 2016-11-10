import 'babel-polyfill';
import 'isomorphic-fetch';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../styles/main.scss';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store} >
    <Router history={history} >
      <Route path="/(:panel)" component={AppContainer} />
    </Router>
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('main')
);
