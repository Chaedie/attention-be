const TodoService = require("./todo.service");
const todoService = new TodoService();

exports.getTodos = async (req, res, next) => {
  const { user_id } = req.session.user;
  const { page } = req.query;

  const todos = await todoService.getTodos(user_id, page);

  res.status(200).json(todos);
};

exports.createTodo = async (req, res, next) => {
  const { user_id } = req.session.user;
  const { todo } = req.body;

  const todoItem = await todoService.createTodo(user_id, todo);

  res.status(201).json(todoItem);
};

exports.updateTodo = async (req, res, next) => {
  const { id: todo_id, todo, isCompleted } = req.body;
  const updatedTodo = await todoService.updateTodo(todo_id, todo, isCompleted);

  res.status(201).json(updatedTodo);
};

exports.deleteTodo = async (req, res, next) => {
  const { id: todo_id } = req.params;
  await todoService.deleteTodo(todo_id);

  res.status(204).json({ message: "delete Todo" });
};
