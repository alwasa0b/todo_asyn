export default (state = { todos: [], todo: { name: "" } }, action) => {
  switch (action.type) {
    case "update":
      return { ...state, todo: { ...state.todo, name: action.name } };
    case "list_fetched":
      return { ...state, todos: action.todos };
    default:
      return state;
  }
};
