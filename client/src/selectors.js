import { createSelector } from "reselect";

const selectTodo = state => state.get("todo");
const selectTodos = state => state.get("todos");

const makeTodoSelector = () =>
  createSelector(selectTodo, state => state.toJS());

const makeTodosSelector = () =>
  createSelector(selectTodos, state => state.toJS());

export { selectTodos, selectTodo, makeTodoSelector, makeTodosSelector };
