import todoSchema from "./models/todo";
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// Connection URL
const url = process.env.DB_URL;

// Use connect method to connect to the server
var todo = mongoose.model("Todo", todoSchema);

export default callback => {
  mongoose.connect(url);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => callback({ todo }));
};
