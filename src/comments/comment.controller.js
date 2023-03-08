const CommentService = require("./comment.service");
const commentService = new CommentService();

class CommentController {
  async getComments(req, res, next) {
    const { id: todo_id } = req.params;
    const commentList = await commentService.getComments({ todo_id });

    res.json(commentList);
  }
  async postComment(req, res, next) {
    const { id: todo_id } = req.params;
    const { comment } = req.body;
    const { user_id } = req.session.user;

    const createdComment = await commentService.postComments({ comment, user_id, todo_id });

    res.json(createdComment);
  }
}

module.exports = CommentController;
