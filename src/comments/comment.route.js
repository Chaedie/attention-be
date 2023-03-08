const express = require("express");
const { errorHandlerWrapper } = require("../middlewares/errorhandler");
const CommentController = require("./comment.controller");
const router = express.Router();

const commentController = new CommentController();

router.get("/:id", errorHandlerWrapper(commentController.getComments));
router.post("/:id", errorHandlerWrapper(commentController.postComment));

module.exports = { commentsRouter: router };
