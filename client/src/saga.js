import { takeEvery, fork, select, call, put } from "redux-saga/effects";
import { listFetched } from "./actions";

const addTodo = async todo => {
  const data = await fetch("http://localhost:8081/api/facets", {
    body: JSON.stringify({ todo }), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json"
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  });

  return data;
};

const getTodos = async () => {
  const data = await new Promise(function(resolve, reject) {
    fetch("http://localhost:8081/api/facets").then(d => resolve(d.json()));
  });
  return data;
};

export function* addTodoSaga() {
  const { todo } = yield select();
  yield call(addTodo, todo);
  const todos = yield call(getTodos);
  yield put(listFetched(todos));
}

export default function*() {
  const todos = yield call(getTodos);
  yield put(listFetched(todos));
  yield takeEvery("add", addTodoSaga);
}
