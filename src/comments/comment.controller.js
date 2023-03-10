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
    // const { user_id } = req.session.user;

    // const createdComment = await commentService.postComments({ comment, user_id, post_id });
    const createdComment = await commentService.postComments({ comment, post_id });

    res.json(createdComment);
  }
}

module.exports = CommentController;
