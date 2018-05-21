import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import persistState from 'redux-localstorage';
import { createEpicMiddleware } from 'redux-observable';
import * as reducers from './reducers';
import { rootEpic } from './epics';

const rootReducer = combineReducers({ ...reducers });

const epicMiddleware = createEpicMiddleware(rootEpic);
// const middlewares = applyMiddleware(middleware, epicMiddleware, logger);
const middlewares = applyMiddleware(epicMiddleware);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(persistState(), middlewares), // TODO:pause timer when loading state from browser, siempre primer elem
);
/* eslint-enable */

export default store;
