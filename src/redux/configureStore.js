import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greeting/greetingReducer';

const reducer = combineReducers({
  greetingReducer,
});

const configureStore = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default configureStore;
