import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import images from './images';
import posts from './posts';

const rootReducer = combineReducers({
  images,
  posts,
  routing: routerReducer,
});

export default rootReducer;
