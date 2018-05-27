import { fromJS } from "immutable";
import { UPDATE, LIST_FETCHED } from "./constants";

const initialState = fromJS({ todos: [], todo: { name: "" } });

const todoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return state.setIn(["todo", "name"], action.name);
    case LIST_FETCHED:
      return state
        .setIn(["todos"], fromJS(action.todos))
        .setIn(["todo", "name"], "");
    default:
      return state;
  }
};

export default todoAppReducer;
