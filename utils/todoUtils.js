const fs = require("fs");
const path = require("path");

const { v4: uuidv4 } = require("uuid");

const rootDir = require("../utils/path");
const filePath = path.join(rootDir, "data", "todo.json");

exports.readData = (callBack) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callBack([]);
    callBack(JSON.parse(content));
  });
};

exports.saveToFile = (todoArray, callBack) => {
  fs.writeFile(filePath, JSON.stringify(todoArray), (err) => {
    callBack(err);
  });
};

exports.generateRandomId = () => {
  return uuidv4();
};

exports.numberOfCompleted = (callBack) => {
  this.readData((todo) => {
    callBack(todo.filter((x) => x.completed == true).length);
  });
};
