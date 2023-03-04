const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("./todo.dao");
const TodoService = require("./todo.service");
const todoService = new TodoService();

exports.getTodos = async (req, res, next) => {
  const { page } = req.query;

  const todos = await todoService.getTodos(page);

  res.status(200).json(todos);
};

exports.createTodo = async (req, res, next) => {
  const todo = await createTodo(req.body.todo);

  res.status(201).json(...todo);
};

exports.updateTodo = async (req, res, next) => {
  const { id, todo, isCompleted } = req.body;
  const updatedTodo = await updateTodo(id, todo, isCompleted);

  res.status(201).json(...updatedTodo);
};

exports.deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  await deleteTodo(id);

  res.status(204).json({ message: "delete Todo" });
};
