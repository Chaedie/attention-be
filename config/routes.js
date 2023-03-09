const app = require("./express");

const { postsRouter } = require("../src/posts/post.route");
const { authRouter } = require("../src/auth/auth.route");
const { commentsRouter } = require("../src/comments/comment.route");
const logger = require("./logger");
const { errorHandlerWrapper } = require("../src/middlewares/errorhandler");
const { serverCheck } = require("../src/middlewares/serverCheck");

app.use("/posts", postsRouter);
app.use("/auth", authRouter);
app.use("/comments", commentsRouter);

app.use("/", errorHandlerWrapper(serverCheck));

app.use("*", (req, res, next) => {
  res.send("404 Not Found");
});

app.use((error, req, res, next) => {
  logger.error(error.message);
  res.status(500).send({ message: "Server Error", error });
});

module.exports = app;
