const CommentDao = require("./comment.dao");
const commentDao = new CommentDao();

class CommentService {
  async getComments({ todo_id }) {
    const commentList = await commentDao.findComments({ todo_id });

    return commentList;
  }
  async postComments({ comment, user_id, todo_id }) {
    const createdComment = await commentDao.createComment({ comment, user_id, todo_id });

    return createdComment;
  }
}

module.exports = CommentService;
