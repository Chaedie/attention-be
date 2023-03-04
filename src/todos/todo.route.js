const express = require("express");
const { getTodos, deleteTodos, createTodos, updateTodos } = require("./todo.controller");
const router = express.Router();

// '/todos'
router.get("/", getTodos);
router.post("/:id", createTodos);
router.put("/:id", updateTodos);
router.delete("/:id", deleteTodos);

module.exports = {
  todosRouter: router,
};
