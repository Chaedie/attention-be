const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("./todo.dao");

exports.getTodos = async (req, res, next) => {
  const todos = await getAllTodos();

  res.json(todos);
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
