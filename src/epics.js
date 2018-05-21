import { combineEpics } from 'redux-observable';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';

const endpoint = 'http://localhost:8080/tasks/';

const postRfcEpic = action$ =>
  action$.ofType('CREATE_TASK')
    .mergeMap(({ payload }) => ajax.post(endpoint, payload, { 'Content-Type': 'application/json' })
      .map(values => ({ type: 'TASK_CREATION_SUCCESS', payload: values.response })));

export const rootEpic = combineEpics(
  postRfcEpic,
);
