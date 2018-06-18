const mongoose = require("mongoose");

const todo = mongoose.Schema({
  text: String,
  status: {
    type: String,
    enum: ["ACTIVE", "COMPLETED"],
    default: "ACTIVE"
  }
});

todo.set("toJSON", {
  virtuals: true
});

export default todo;
