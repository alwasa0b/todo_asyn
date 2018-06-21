import resource from "resource-router-middleware";
import { toRes } from "../lib/util";

export default ({ db }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: "todo",

    load({}, id, next) {
      db.todo.findById(id, next);
    },

    index({}, res) {
      db.todo.find({}, toRes(res));
    },

    create({ body }, res) {
      const todo = new db.todo({ text: body.text });
      todo.save(toRes(res));
    },

    read({ todo }, res) {
      res.json(todo);
    },

    update({ todo, body }, res) {
      todo.text = body.text;
      todo.status = body.status;
      todo.save(toRes(res));
    },

    delete({ todo }, res) {
      todo.remove(() => res.sendStatus(204));
    },

    toggle({ todo }, res) {
      todo.status = todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE";
      todo.save(toRes(res));
    }
  });
