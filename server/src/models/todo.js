const mongoose = require("mongoose");

const todo = mongoose.Schema({
  text: String
});

todo.set('toJSON', {
  virtuals: true
});

export default todo;
