import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { add, update, edit, save, remove, toggle } from "./actions";
import { makeTodoSelector, makeFilteredTodosSelector, selectEditId } from "./selectors";
import Todo from "./Todo";
import Filter from "./Filter";
import { COMPLETED } from "./constants";

const App = ({
  editId,
  todo = {},
  todos = [],
  addTodo,
  update,
  edit,
  save,
  remove,
  toggle
}) => (
  <div>
    <input
      value={todo.text}
      disabled={editId > -1}
      onChange={({ target }) => update({ text: target.value })}
      onKeyDown={({ keyCode }) => keyCode !== 13 || addTodo()}
    />
    <button onClick={addTodo}>Add</button>
    <Filter/>
    <ul>
      {todos.map((todo, i) => (
        <Todo
          key={i}
          editing={editId === todo.id}
          text={todo.text}
          save={save}
          update={({ target }) => update({ text: target.value, id: todo.id })}
          remove={() => remove(todo.id)}
          edit={() => edit(todo.id)}
          toggle={() => toggle(todo.id)}
          lineThrough={todo.status === COMPLETED}
        />
      ))}
    </ul>
  </div>
);

export default connect(
  createStructuredSelector({
    todo: makeTodoSelector(),
    todos: makeFilteredTodosSelector(),
    editId: selectEditId
  }),
  dispatch => ({
    addTodo: () => dispatch(add()),
    update: text => dispatch(update(text)),
    edit: id => dispatch(edit(id)),
    save: () => dispatch(save()),
    remove: id => dispatch(remove(id)),
    toggle: id => dispatch(toggle(id))
  })
)(App);
