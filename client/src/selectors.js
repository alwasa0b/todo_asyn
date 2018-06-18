import { createSelector } from "reselect";
import { ALL } from "./constants";

const selectNewTodo = state => state.getIn(["app", "todos", "-1"]);

const selectTodos = state => state.getIn(["app", "todos"]);

const selectFilter = state => state.getIn(["filter"]);

const selectEditedTodo = state =>
  state.getIn(["app", "todos", state.getIn(["app", "editId"])]);

const makeTodoSelector = () =>
  createSelector(selectNewTodo, state => state.toJS());

const makeEditTodoSelector = () =>
  createSelector(selectEditedTodo, state => state.toJS());

const selectEditId = state => state.getIn(["app", "editId"]);

const makeTodosSelector = () =>
  createSelector(selectTodos, state => {
    const todos = state.toJS();
    return Object.keys(todos)
      .map(key => todos[key])
      .filter(todo => !(Number(todo.id) < 0));
  });

const makeFilteredTodosSelector = () =>
  createSelector(selectTodos, selectFilter, (state, filter) => {
    const todos = state.toJS();
    return Object.keys(todos)
      .map(key => todos[key])
      .filter(
        todo =>
          (!(Number(todo.id) < 0) && filter === ALL) || todo.status === filter
      );
  });

const makeTodoByIdSelector = id =>
  createSelector(selectTodos, state => state.get(id).toJS());

export {
  selectFilter,
  selectTodos,
  selectNewTodo,
  makeTodoSelector,
  makeTodosSelector,
  makeTodoByIdSelector,
  makeFilteredTodosSelector,
  selectEditId,
  makeEditTodoSelector
};
