import React from "react";

const Todo = ({
  editing,
  text,
  save,
  update,
  remove,
  edit,
  toggle,
  lineThrough
}) => (
  <li>
    {editing ? (
      <input
        onKeyDown={({ keyCode }) => keyCode !== 13 || save()}
        value={text}
        onChange={update}
      />
    ) : (
      <div>
        <div>
          <i className="fas fa-times" aria-hidden="true" onClick={remove} />
          <i className="far fa-edit" aria-hidden="true" onClick={edit} />
          <span
            onClick={toggle}
            aria-hidden="true"
            style={{ textDecoration: lineThrough ? "line-through" : "" }}
          >
            {text}
          </span>
        </div>
      </div>
    )}
  </li>
);

export default Todo;
