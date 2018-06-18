import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { all, active, completed } from "./actions";
import { selectFilter } from "./selectors";
import { ALL, ACTIVE, COMPLETED } from "./constants";

const Filter = ({ filter, all, active, completed }) => {
  return (
    <div>
      <h6
        style={{ textDecoration: filter === ALL ? "underline" : "" }}
        onClick={all}
        aria-hidden="true"
      >
        ALL
      </h6>
      <h6
        style={{ textDecoration: filter === ACTIVE ? "underline" : "" }}
        onClick={active}
        aria-hidden="true"
      >
        ACTIVE
      </h6>
      <h6
        style={{ textDecoration: filter === COMPLETED ? "underline" : "" }}
        onClick={completed}
        aria-hidden="true"
      >
        COMPLETED
      </h6>
    </div>
  );
};

export default connect(
  createStructuredSelector({
    filter: selectFilter
  }),
  dispatch => ({
    all: () => dispatch(all()),
    active: text => dispatch(active(text)),
    completed: id => dispatch(completed(id))
  })
)(Filter);
