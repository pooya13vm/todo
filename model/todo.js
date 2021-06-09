const todoUtils = require("../utils/todoUtils");
const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

const filePath = path.join(rootDir, "data", "todo.json");
class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    todoUtils.readData((todo) => {
      todo.push(this);
      todoUtils.saveToFile(todo, (err) => {
        callback(err);
      });
    });
  }

  static fetchAll(callback) {
    todoUtils.readData((todo) => {
      callback(todo);
    });
  }
  static removeFromList(id, callBack) {
    todoUtils.readData((todo) => {
      const filteredList = todo.filter((x) => x.id != id);
      todoUtils.saveToFile(filteredList, (err) => {
        callBack(err);
      });
    });
  }
  static completedTodo(id, callBack) {
    todoUtils.readData((todo) => {
      todo.map((x) => (x.id == id ? (x.completed = true) : null));
      todoUtils.saveToFile(todo, (err) => {
        callBack(err);
      });
    });
  }
}

module.exports = Todo;
