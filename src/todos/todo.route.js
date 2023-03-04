const express = require("express");
const { getTodos, deleteTodos, createTodo, updateTodos } = require("./todo.controller");
const router = express.Router();

// '/todos'
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodos);
router.delete("/:id", deleteTodos);

module.exports = {
  todosRouter: router,
};
