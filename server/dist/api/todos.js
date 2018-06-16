"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resourceRouterMiddleware = require("resource-router-middleware");

var _resourceRouterMiddleware2 = _interopRequireDefault(_resourceRouterMiddleware);

var _todos = require("../models/todos");

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;
  return (0, _resourceRouterMiddleware2.default)({
    /** Property name to store preloaded entity on `request`. */
    id: "todo",

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load: function load(req, id, callback) {
      var todo = _todos2.default.find(function (todo) {
        return todo.id === id;
      }),
          err = todo ? null : "Not found";
      callback(err, todo);
    },


    /** GET / - List all entities */
    index: function index(_ref2, res) {
      var params = _ref2.params;

      res.json(_todos2.default);
    },


    /** POST / - Create a new entity */
    create: function create(_ref3, res) {
      var body = _ref3.body;

      body.id = _todos2.default.length.toString(36);
      _todos2.default.push(body);
      res.json(body);
    },


    /** GET /:id - Return a given entity */
    read: function read(_ref4, res) {
      var todo = _ref4.todo;

      res.json(todo);
    },


    /** PUT /:id - Update a given entity */
    update: function update(_ref5, res) {
      var todo = _ref5.todo,
          body = _ref5.body;

      for (var key in body) {
        if (key !== "id") {
          todo[key] = body[key];
        }
      }
      res.sendStatus(204);
    },


    /** DELETE /:id - Delete a given entity */
    delete: function _delete(_ref6, res) {
      var todo = _ref6.todo;

      _todos2.default.splice(_todos2.default.indexOf(todo), 1);
      res.sendStatus(204);
    }
  });
};
//# sourceMappingURL=todos.js.map