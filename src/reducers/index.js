import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import message from '../reducers/message';

const rootReducer = combineReducers({
  routing: routerReducer,
  message,
});

export default rootReducer;
