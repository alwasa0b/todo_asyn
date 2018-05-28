import { takeEvery, select, call, put } from "redux-saga/effects";
import { listFetched } from "./actions";
import { makeTodoSelector, makeEditTodoSelector } from "./selectors";
import { addTodo, getTodos, saveTodo } from "./services";
import { ADD, SAVE } from "./constants";

export function* addTodoSaga() {
  try {
    const state = yield select();
    const todo = makeTodoSelector()(state);
    yield call(addTodo, todo);
    const todos = yield call(getTodos);
    yield put(listFetched(todos));
  } catch (error) {
    console.error(error);
  }
}

export function* saveTodoSaga() {
  try {
    const state = yield select();
    const todo = makeEditTodoSelector()(state);
    yield call(saveTodo, todo);
    const todos = yield call(getTodos);
    yield put(listFetched(todos));
  } catch (error) {
    console.error(error);
  }
}

export default function*() {
  try {
    const todos = yield call(getTodos);
    yield put(listFetched(todos));
    yield takeEvery(ADD, addTodoSaga);
    yield takeEvery(SAVE, saveTodoSaga);
  } catch (error) {
    console.error(error);
  }
}
