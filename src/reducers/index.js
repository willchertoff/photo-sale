import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import environment from './environment';
import images from './images';
import posts from './posts';

const rootReducer = combineReducers({
  environment,
  images,
  posts,
  routing: routerReducer,
});

export default rootReducer;
