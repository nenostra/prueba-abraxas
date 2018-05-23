import { combineEpics, ofType } from 'redux-observable';
import { Observable, of, from, merge, fromEvent, timer } from 'rxjs';
import { map, switchMap, mergeMap, takeUntil, tap, ignoreElements, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const endpoint = 'http://localhost:8080/tasks/';

const validateErrorZeroHelper = (successAction, failAction) =>
  map(values => (
    values.status !== 0
      ? ({ type: successAction, payload: values.response })
      : ({ type: failAction })
  ));

const getTasksEpic = action$ =>
  action$.pipe(
    ofType('HOME'),
    switchMap(() =>
      ajax.get(endpoint).pipe(
        validateErrorZeroHelper('TASK_FETCH_SUCCESS', 'TASK_FETCH_FAIL'),
        catchError(() => of({ type: 'TASK_FETCH_FAIL' })),
      )),
  );

const createTaskEpic = action$ =>
  action$.pipe(
    ofType('CREATE_TASK'),
    mergeMap(({ payload }) =>
      ajax.post(
        endpoint,
        payload,
        { 'Content-Type': 'application/json' },
      ).pipe(
        validateErrorZeroHelper('TASK_CREATION_SUCCESS', 'TASK_CREATION_FAIL'),
        catchError(() => of({ type: 'TASK_CREATION_FAIL' })),
      )),
  );

const editTaskEpic = action$ =>
  action$.pipe(
    ofType('EDIT_TASK'),
    mergeMap(({ payload }) =>
      ajax.put(
        `${endpoint}${payload._id}`,
        payload,
        { 'Content-Type': 'application/json' },
      ).pipe(
        validateErrorZeroHelper('TASK_EDIT_SUCCESS', 'TASK_EDIT_FAIL'),
        catchError(() => of({ type: 'TASK_EDIT_FAIL' })),
      )),
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
  editTaskEpic,
);
