const Todo = require("../model/todo");
const randomId = require("../utils/todoUtils");

exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  const todo = new Todo(randomId.generateRandomId(), req.body.todo);
  todo.save((err) => {
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
};

exports.deleteTodo = (req, res) => {
  Todo.removeFromList(req.params.id, (err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};

exports.completedTodo = (req, res) => {
  Todo.completedTodo(req.params.id, (err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};
