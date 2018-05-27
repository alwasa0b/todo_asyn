import { takeEvery, select, call, put } from "redux-saga/effects";
import { listFetched } from "./actions";
import { makeTodoSelector } from "./selectors";
import { addTodo, getTodos } from "./services";
import { ADD } from "./constants";

export function* addTodoSaga() {
  const state = yield select();
  const todo = makeTodoSelector()(state);
  yield call(addTodo, todo);
  const todos = yield call(getTodos);
  yield put(listFetched(todos));
}

export default function*() {
  const todos = yield call(getTodos);
  yield put(listFetched(todos));
  yield takeEvery(ADD, addTodoSaga);
}
