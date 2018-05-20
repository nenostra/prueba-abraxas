import { createStore, /* applyMiddleware, compose, */ combineReducers } from 'redux';
import persistState from 'redux-localstorage';
import * as reducers from './reducers';
// import { createEpicMiddleware } from 'redux-observable';
// import { rootEpic } from './epics';

const rootReducer = combineReducers({ ...reducers });

// const epicMiddleware = createEpicMiddleware(rootEpic);
// const middlewares = applyMiddleware(middleware, epicMiddleware, logger);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  persistState(), // TODO:pause timer when loading state from browser, siempre primer elem
);
/* eslint-enable */

export default store;
