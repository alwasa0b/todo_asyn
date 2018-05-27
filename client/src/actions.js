import { UPDATE, ADD, LIST_FETCHED } from "./constants";

export const update = name => ({ type: UPDATE, name });
export const add = () => ({ type: ADD });
export const listFetched = todos => ({ type: LIST_FETCHED, todos });
