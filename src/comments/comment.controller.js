const CommentService = require("./comment.service");
const commentService = new CommentService();

class CommentController {
  async getComments(req, res, next) {
    const { id: post_id } = req.params;
    const commentList = await commentService.getComments({ post_id });

    res.json(commentList);
  }
  async postComment(req, res, next) {
    const { id: post_id } = req.params;
    const { comment } = req.body;
    const { id: user_id } = req.user;

    const createdComment = await commentService.postComments({ comment, user_id, post_id });

    res.json(createdComment);
  }
}

module.exports = CommentController;
