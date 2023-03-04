const express = require("express");
const { getTodos, deleteTodo, createTodo, updateTodo } = require("./todo.controller");
const router = express.Router();

// '/todos'
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = {
  todosRouter: router,
};
