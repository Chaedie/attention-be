const client = require("../../config/db");
const sanitizeHtml = require("sanitize-html");
const csrf = require("csurf");
const logger = require("../../config/logger");
const csrfProtection = csrf({ cookie: true });

class CommentDao {
  async findComments({ todo_id }) {
    const values = [todo_id];
    const query = `
        SELECT id as comment_id, comment, user_id
        FROM comments
        WHERE todo_id = $1
      `;

    const { rows } = await client.query(query, values);

    return rows;
  }

  async createComment({ comment, user_id, todo_id }) {
    const values = [comment, user_id, todo_id];
    const query = `
    INSERT INTO comments
    (comment, user_id, todo_id)
    VALUES($1, $2, $3)
    RETURNING id as comment_id, comment, user_id, todo_id;
  `;

    const { rows } = await client.query(query, values);

    return rows[0];
  }
}

module.exports = CommentDao;
