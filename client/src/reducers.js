import { fromJS } from "immutable";
import { UPDATE, LIST_FETCHED } from "./constants";

const initialState = fromJS({ todos: [], todo: { text: "" } });

const todoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return state.setIn(["todo", "text"], action.text);
    case LIST_FETCHED:
      return state
        .setIn(["todos"], fromJS(action.todos))
        .setIn(["todo", "text"], "");
    default:
      return state;
  }
};

export default todoAppReducer;
