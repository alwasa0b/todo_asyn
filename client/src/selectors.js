import { createSelector } from "reselect";

const selectNewTodo = state => state.getIn(["todos", "-1"]);

const selectTodos = state => state.get("todos");

const selectEditedTodo = state => state.getIn(["todos", state.get("editId")]);

const makeTodoSelector = () =>
  createSelector(selectNewTodo, state => state.toJS());

const makeEditTodoSelector = () =>
  createSelector(selectEditedTodo, state => state.toJS());

const selectEditId = state => Number(state.get("editId"));

const makeTodosSelector = () =>
  createSelector(selectTodos, state => {
    const todos = state.toJS();
    return Object.keys(todos)
      .map(key => todos[key])
      .filter(todo => todo.id >= 0);
  });

export {
  selectTodos,
  selectNewTodo,
  makeTodoSelector,
  makeTodosSelector,
  selectEditId,
  makeEditTodoSelector
};
