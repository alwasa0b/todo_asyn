import {
  UPDATE,
  ADD,
  LIST_FETCHED,
  EDIT,
  SAVE,
  REMOVE,
  FETCH_LIST,
  TOGGLE,
  ALL,
  ACTIVE,
  COMPLETED
} from "./constants";

export const update = ({ id = "-1", text }) => ({
  type: UPDATE,
  todo: { id, text }
});

export const add = () => ({ type: ADD });
export const edit = id => ({ type: EDIT, id });
export const save = () => ({ type: SAVE });
export const remove = id => ({ type: REMOVE, id });
export const toggle = id => ({ type: TOGGLE, id });
export const fetchList = () => ({ type: FETCH_LIST });
export const listFetched = todos => ({ type: LIST_FETCHED, todos });

export const all = () => ({ type: ALL });
export const active = () => ({ type: ACTIVE });
export const completed = () => ({ type: COMPLETED });
