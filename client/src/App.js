import React from "react";
import { connect } from "react-redux";
import { add, update } from "./actions";

const App = ({ thisTodo = {}, thisTodos = [], addTodo, updateTodo }) => (
  <div className="App">
    <input
      value={thisTodo.name}
      onChange={({ target }) => updateTodo(target.value)}
    />
    <button onClick={addTodo} >Add</button>
    <ul>{thisTodos.map((todo, i) => <li key={i}>{todo.todo.name}</li>)}</ul>
  </div>
);

export default connect(
  state => ({ thisTodo: state.todo, thisTodos: state.todos }),
  dispatch => ({
    addTodo: () => dispatch(add()),
    updateTodo: name => dispatch(update(name))
  })
)(App);
