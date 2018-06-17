import resource from "resource-router-middleware";

export default ({ db }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: "todo",

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
      db.todo.findById(id, (err, todo) => {
        callback(err, todo);
      });
    },

    index({ params }, res) {
      db.todo.find({}, function(err, docs) {
        res.json(docs);
      });
    },

    create({ body }, res) {
      const todo = new db.todo({ text: body.text });
      todo.save((err, created) => res.json(err || created));
    },

    read({ todo }, res) {
      res.json(todo);
    },

    update({ todo, body }, res) {
      todo.text = body.text;
      todo.save((err, updated) => res.json(err || updated));
    },

    delete({ todo }, res) {
      db.todo.deleteOne({ _id: todo._id }, () => {
        res.sendStatus(204);
      });
    }
  });
