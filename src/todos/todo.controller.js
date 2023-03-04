exports.getTodos = (req, res, next) => {
  console.log(req);
  res.json([{ id: 1, todo: "겟 투두 성공", isCompleted: false }]);
};

exports.createTodos = (req, res, next) => {
  res.send("createTodos");
};

exports.updateTodos = (req, res, next) => {
  res.send("updateTodos");
};

exports.deleteTodos = (req, res, next) => {
  res.send("deleteTodos");
};
