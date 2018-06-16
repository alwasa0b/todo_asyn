import {
  UPDATE,
  ADD,
  LIST_FETCHED,
  EDIT,
  SAVE,
  REMOVE,
  FETCH_LIST
} from "./constants";

export const update = ({ id = "-1", text }) => ({
  type: UPDATE,
  todo: { id, text }
});

export const add = () => ({ type: ADD });
export const edit = id => ({ type: EDIT, id });
export const save = () => ({ type: SAVE });
export const remove = id => ({ type: REMOVE, id });
export const fetchList = todos => ({ type: FETCH_LIST });
export const listFetched = todos => ({ type: LIST_FETCHED, todos });
