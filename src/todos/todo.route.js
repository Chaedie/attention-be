const express = require("express");
const { errorHandlerWrapper } = require("../middlewares/errorhandler");
const { getTodos, deleteTodo, createTodo, updateTodo } = require("./todo.controller");
const router = express.Router();

// '/todos'
router.get("/", errorHandlerWrapper(getTodos));
router.post("/", errorHandlerWrapper(createTodo));
router.put("/:id", errorHandlerWrapper(updateTodo));
router.delete("/:id", errorHandlerWrapper(deleteTodo));

module.exports = {
  todosRouter: router,
};
