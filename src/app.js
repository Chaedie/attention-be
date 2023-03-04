const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const client = require("../config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const { todosRouter } = require("./todos/todo.route");
// const todosRouter = require("./auth/auth.controller");

app.use("/todos", todosRouter);
// app.use("/auth", authRouter);

app.use("*", (req, res, next) => {
  res.send("404 Not Found");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.send("500");
});

app.listen(PORT, () => console.log(`server is on ${PORT}`));
