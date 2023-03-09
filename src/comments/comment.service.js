const CommentDao = require("./comment.dao");
const commentDao = new CommentDao();

class CommentService {
  async getComments({ post_id }) {
    const commentList = await commentDao.findComments({ post_id });

    return commentList;
  }
  async postComments({ comment, user_id, post_id }) {
    const createdComment = await commentDao.createComment({ comment, user_id, post_id });

    return createdComment;
  }
}

module.exports = CommentService;
