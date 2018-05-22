import { combineEpics, ofType } from 'redux-observable';
import { Observable, of, from, merge, fromEvent, timer } from 'rxjs';
import { map, switchMap, mergeMap, takeUntil, tap, ignoreElements, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const endpoint = 'http://localhost:8080/tasks/';

const getTasksEpic = action$ =>
  action$.pipe(
    ofType('HOME'),
    switchMap(() =>
      ajax.get(endpoint).pipe(map(values =>
        ({ type: 'TASK_FETCH_SUCCESS', payload: values.response })))),
  );

const createTaskEpic = action$ =>
  action$.pipe(
    ofType('CREATE_TASK'),
    mergeMap(({ payload }) =>
      ajax.post(
        endpoint,
        payload,
        { 'Content-Type': 'application/json' },
      ).pipe(map(values =>
        ({ type: 'TASK_CREATION_SUCCESS', payload: values.response })))),
  );

const timerEpic = action$ =>
  action$.pipe(
    ofType('START_TASK'),
    switchMap(() =>
      timer(1000, 1000).pipe(
        map(() => ({ type: 'TICK' })),
        takeUntil(action$.pipe(ofType('STOP_TASK'))),
      )),
  );

export const rootEpic = combineEpics(
  createTaskEpic,
  timerEpic,
  getTasksEpic,
);
