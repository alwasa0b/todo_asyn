import { fromJS } from "immutable";

import {
  UPDATE,
  LIST_FETCHED,
  EDIT,
  ALL,
  ACTIVE,
  COMPLETED
} from "./constants";

import { combineReducers } from "redux-immutable";

const initialState = fromJS({
  todos: { "-1": { id: "-1", text: "" } },
  editId: -1
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return state.mergeIn(["todos", action.todo.id], fromJS(action.todo));
    case LIST_FETCHED:
      return state
        .setIn(
          ["todos"],
          fromJS(action.todos.reduce((p, n) => ({ ...p, [n.id]: n }), {}))
        )
        .setIn(["todos", "-1"], fromJS({ id: "-1", text: "" }))
        .set("editId", "-1");
    case EDIT:
      return state.set("editId", action.id);
    default:
      return state;
  }
};

const filter = (state = ALL, action) => {
  switch (action.type) {
    case ALL:
    case ACTIVE:
    case COMPLETED:
      return action.type;
    default:
      return state;
  }
};

export default combineReducers({ app, filter });
