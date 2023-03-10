const app = require("./express");

const { postsRouter } = require("../src/posts/post.route");
const { authRouter } = require("../src/auth/auth.route");
const { commentsRouter } = require("../src/comments/comment.route");
const logger = require("./logger");
const { errorHandlerWrapper, errorTester } = require("../src/middlewares/errorhandler");
const { serverCheck } = require("../src/middlewares/checks");

app.use("/posts", postsRouter);
app.use("/auth", authRouter);
app.use("/comments", commentsRouter);

app.get("/", errorHandlerWrapper(serverCheck));
app.get("/test", errorHandlerWrapper(errorTester));

app.use("*", (req, res, next) => {
  res.send("404 Not Found");
});

app.use((error, req, res, next) => {
  res.status(500).send(error);
  logger.error(error);
});

module.exports = app;
