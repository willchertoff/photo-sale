import 'babel-polyfill';
import 'isomorphic-fetch';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import BlogContainer from './containers/BlogContainer';
import PhotoStreamContainer from './containers/PhotoStreamContainer';
import ShopContainer from './containers/ShopContainer';
import VideoStreamContainer from './containers/VideoStreamContainer';

import BlogArticle from './components/BlogArticle';

import '../styles/main.scss';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store} >
    <Router history={history} >
      <Route component={AppContainer}>
        <Route path="/blog" component={BlogContainer}>
          <Route path="/blog/:postId" component={BlogArticle} />
        </Route>
        <Route path="/" component={PhotoStreamContainer} />
        <Route path="/shop" component={ShopContainer} />
        <Route path="/video" component={VideoStreamContainer} />
      </Route>
    </Router>
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('main')
);
