import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import persistState from 'redux-localstorage';
import { createEpicMiddleware } from 'redux-observable';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import * as reducers from './reducers';
import { rootEpic } from './epics';

const routesMap = {
  HOME: '/',
};

const history = createHistory();
const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);
const rootReducer = combineReducers({ ...reducers, location: reducer });

const epicMiddleware = createEpicMiddleware(rootEpic);
const middlewares = applyMiddleware(middleware, epicMiddleware);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // compose(persistState(), middlewares),
  compose(enhancer, middlewares),
  // TODO:pause timer when loading state from browser, siempre primer elem
);

export default store;
