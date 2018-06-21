import resource from "resource-router-middleware";

export default ({ db }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: "todo",

    async load({}, id, next) {
      try {
        const todo = await db.todo.findById(id);
        next(null, todo);
      } catch (error) {
        next(error);
      }
    },

    async index({}, res) {
      const todos = await db.todo.find({});
      res.json(todos);
    },

    async create({ body }, res) {
      const todo = new db.todo({ text: body.text });
      const created = await todo.save();
      res.json(created);
    },

    read({ todo }, res) {
      res.json(todo);
    },

    async update({ todo, body }, res) {
      todo.text = body.text;
      todo.status = body.status;
      const updated = await todo.save();
      res.json(updated);
    },

    async delete({ todo }, res) {
      await db.todo.deleteOne({ _id: todo._id });
      res.sendStatus(204);
    },

    async toggle({ todo }, res) {
      todo.status = todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE";
      const updated = await todo.save();
      res.json(updated);
    }
  });
