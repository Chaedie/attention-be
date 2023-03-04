const app = require("./express");

const { todosRouter } = require("../src/todos/todo.route");
const { authRouter } = require("../src/auth/auth.route");

app.use("/todos", todosRouter);
app.use("/auth", authRouter);

app.use("*", (req, res, next) => {
  res.send("404 Not Found");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send({ message: "Server Error", error });
});

module.exports = app;
