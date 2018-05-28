import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { add, update, edit, save } from "./actions";
import { makeTodoSelector, makeTodosSelector, selectEditId } from "./selectors";

const App = ({
  editId,
  thisTodo = {},
  thisTodos = [],
  addTodo,
  updateTodo,
  edit,
  save
}) => (
  <div>
    <input
      value={thisTodo.text}
      disabled={editId > -1}
      onChange={({ target }) => updateTodo({ text: target.value })}
      onKeyDown={({ keyCode }) => keyCode !== 13 || addTodo()}
    />
    <button onClick={addTodo}>Add</button>
    <ul>
      {thisTodos.map((todo, i) => (
        <li key={i} onDoubleClick={() => editId === 0 || edit(todo.id)}>
          {editId === i ? (
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
    thisTodo: makeTodoSelector(),
    thisTodos: makeTodosSelector(),
    editId: selectEditId
  }),
  dispatch => ({
    addTodo: () => dispatch(add()),
    updateTodo: text => dispatch(update(text)),
    edit: id => dispatch(edit(id)),
    save: () => dispatch(save())
  })
)(App);
