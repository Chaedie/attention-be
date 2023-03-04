const { getAllTodos, createTodo } = require("./todo.dao");

exports.getTodos = async (req, res, next) => {
  const todos = await getAllTodos();
  console.log(todos);
  res.json(todos);
};

exports.createTodo = async (req, res, next) => {
  const todo = await createTodo(req.body.todo);

  res.status(201).json(todo);
};

exports.updateTodos = (req, res, next) => {
  res.send("updateTodos");
};

exports.deleteTodos = (req, res, next) => {
  res.send("deleteTodos");
};
