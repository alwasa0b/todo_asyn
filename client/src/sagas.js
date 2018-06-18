import { takeEvery, select, call, put } from "redux-saga/effects";
import { listFetched, fetchList } from "./actions";

import {
  makeTodoSelector,
  makeEditTodoSelector,
  makeTodoByIdSelector
} from "./selectors";

import { addTodo, getTodos, saveTodo, deleteTodo } from "./services";
import { ADD, SAVE, REMOVE, FETCH_LIST, TOGGLE, ACTIVE, COMPLETED } from "./constants";

export function* addTodoSaga() {
  try {
    const state = yield select();
    const todo = makeTodoSelector()(state);
    yield call(addTodo, todo);
    yield put(fetchList());
  } catch (error) {
    console.error(error);
  }
}

export function* saveTodoSaga() {
  try {
    const state = yield select();
    const todo = makeEditTodoSelector()(state);
    yield call(saveTodo, todo);
    yield put(fetchList());
  } catch (error) {
    console.error(error);
  }
}

export function* removeTodoSaga({ id }) {
  try {
    yield call(deleteTodo, id);
    yield put(fetchList());
  } catch (error) {
    console.error(error);
  }
}

export function* fetchListSaga() {
  try {
    const todos = yield call(getTodos);
    yield put(listFetched(todos));
  } catch (error) {
    console.error(error);
  }
}

export function* toggleTodoSaga({ id }) {
  try {
    const state = yield select();
    const todo = makeTodoByIdSelector(id)(state);

    yield call(saveTodo, {
      ...todo,
      status: todo["status"] === ACTIVE ? COMPLETED : ACTIVE
    });

    yield put(fetchList());
  } catch (error) {
    console.error(error);
  }
}

export default function*() {
  try {
    const todos = yield call(getTodos);
    yield put(listFetched(todos));
    yield takeEvery(FETCH_LIST, fetchListSaga);
    yield takeEvery(ADD, addTodoSaga);
    yield takeEvery(SAVE, saveTodoSaga);
    yield takeEvery(REMOVE, removeTodoSaga);
    yield takeEvery(TOGGLE, toggleTodoSaga);
  } catch (error) {
    console.error(error);
  }
}
