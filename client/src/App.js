import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { add, update, edit, save } from "./actions";
import { makeTodoSelector, makeTodosSelector, selectEditId } from "./selectors";

const App = ({
  editId,
  todo = {},
  todos = [],
  addTodo,
  updateTodo,
  edit,
  save
}) => (
  <div>
    <input
      value={todo.text}
      disabled={editId > -1}
      onChange={({ target }) => updateTodo({ text: target.value })}
      onKeyDown={({ keyCode }) => keyCode !== 13 || addTodo()}
    />
    <button onClick={addTodo}>Add</button>
    <ul>
      {todos.map((todo, i) => (
        <li key={i} onDoubleClick={() => editId > -1 || edit(todo.id)}>
          {editId === todo.id ? (
            <input
              onKeyDown={({ keyCode }) => keyCode !== 13 || save()}
              value={todo.text}
              onChange={({ target }) =>
                updateTodo({ text: target.value, id: todo.id })
              }
            />
          ) : (
            todo.text
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default connect(
  createStructuredSelector({
    todo: makeTodoSelector(),
    todos: makeTodosSelector(),
    editId: selectEditId
  }),
  dispatch => ({
    addTodo: () => dispatch(add()),
    updateTodo: text => dispatch(update(text)),
    edit: id => dispatch(edit(id)),
    save: () => dispatch(save())
  })
)(App);
