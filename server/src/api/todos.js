import resource from "resource-router-middleware";
import todos from "../models/todos";

export default ({ config, db }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: "todo",

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
      let todo = todos.find(todo => todo.id === id),
        err = todo ? null : "Not found";
      callback(err, todo);
    },

    /** GET / - List all entities */
    index({ params }, res) {
      console.log(res);
      res.json(todos);
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
      body.id = todos.length.toString(36);
      todos.push(body);
      res.json(body);
    },

    /** GET /:id - Return a given entity */
    read({ todo }, res) {
      res.json(todo);
    },

    /** PUT /:id - Update a given entity */
    update({ todo, body }, res) {
      for (let key in body) {
        if (key !== "id") {
          todo[key] = body[key];
        }
      }
      res.sendStatus(204);
    },

    /** DELETE /:id - Delete a given entity */
    delete({ todo }, res) {
      todos.splice(todos.indexOf(todo), 1);
      res.sendStatus(204);
    }
  });
