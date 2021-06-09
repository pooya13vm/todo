const Todo = require("../model/todo");
const todoUtils = require("../utils/todoUtils");

exports.getIndex = (req, res) => {
  todoUtils.numberOfCompleted((completed) => {
    Todo.fetchAll((todoList) => {
      res.render("index", {
        pageTitle: "To do list",
        todoList,
        completed,
        notCompleted: todoList.length - completed,
      });
    });
  });
};
