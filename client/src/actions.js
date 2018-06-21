import * as constants from "./constants";

export const update = ({ id = "-1", text }) => ({
  type: constants.UPDATE,
  todo: { id, text }
});

export const add = () => ({ type: constants.ADD });
export const edit = id => ({ type: constants.EDIT, id });
export const save = () => ({ type: constants.SAVE });
export const remove = id => ({ type: constants.REMOVE, id });
export const toggle = id => ({ type: constants.TOGGLE, id });
export const fetchList = () => ({ type: constants.FETCH_LIST });
export const listFetched = todos => ({ type: constants.LIST_FETCHED, todos });

export const all = () => ({ type: constants.ALL });
export const active = () => ({ type: constants.ACTIVE });
export const completed = () => ({ type: constants.COMPLETED });
