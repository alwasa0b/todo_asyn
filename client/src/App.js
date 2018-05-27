import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { add, update } from "./actions";
import { makeTodoSelector, makeTodosSelector } from "./selectors";

const App = ({ thisTodo = {}, thisTodos = [], addTodo, updateTodo }) => (
  <div>
    <input
      value={thisTodo.name}
      onChange={({ target }) => updateTodo(target.value)}
      onKeyDown={({ keyCode }) => keyCode !== 13 || addTodo()}
    />
    <button onClick={addTodo}>Add</button>
    <ul>{thisTodos.map((todo, i) => <li key={i}>{todo.todo.name}</li>)}</ul>
  </div>
);

export default connect(
  createStructuredSelector({
    thisTodo: makeTodoSelector(),
    thisTodos: makeTodosSelector()
  }),
  dispatch => ({
    addTodo: () => dispatch(add()),
    updateTodo: name => dispatch(update(name))
  })
)(App);
