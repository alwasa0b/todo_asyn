import todoSchema from "./models/todo";
import mongoose from "mongoose";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const url = process.env.DB_URL;

const todo = mongoose.model("Todo", todoSchema);

export default callback => {
  mongoose.connect(url);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => callback({ todo }));
};
