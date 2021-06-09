const express = require("express");

const adminController = require("../controllers/admin");
const todoList = require("../controllers/showList");
// console.log(adminController);

const router = express.Router();

router.post("/add-todo", adminController.addTodo);
router.get("/", todoList.getIndex);
router.get("/delete-item/:id", adminController.deleteTodo);
router.get("/completed-item/:id", adminController.completedTodo);

module.exports = router;
