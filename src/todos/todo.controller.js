const TodoService = require("./todo.service");
const todoService = new TodoService();

exports.getTodos = async (req, res, next) => {
  const todos = await todoService.getTodos(req.query.page);

  res.status(200).json(todos);
};

exports.createTodo = async (req, res, next) => {
  const todoItem = await todoService.createTodo(req.body.todo);

  res.status(201).json(todoItem);
};

exports.updateTodo = async (req, res, next) => {
  const { id, todo, isCompleted } = req.body;
  const updatedTodo = await todoService.updateTodo(id, todo, isCompleted);

  res.status(201).json(updatedTodo);
};

exports.deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  await todoService.deleteTodo(id);

  res.status(204).json({ message: "delete Todo" });
};
