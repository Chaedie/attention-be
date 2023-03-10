const express = require("express");
const { errorHandlerWrapper } = require("../middlewares/errorhandler");
const { getPosts, deletePost, createPost, updatePost, getTodaysPost } = require("./post.controller");
const router = express.Router();

// '/posts'
router.get("/", errorHandlerWrapper(getPosts));
router.post("/", errorHandlerWrapper(createPost));
router.put("/:id", errorHandlerWrapper(updatePost));
router.delete("/:id", errorHandlerWrapper(deletePost));
router.get("/today", errorHandlerWrapper(getTodaysPost));

module.exports = {
  postsRouter: router,
};
