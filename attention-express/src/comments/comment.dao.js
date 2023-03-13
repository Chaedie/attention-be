const client = require("../../config/db");
const sanitizeHtml = require("sanitize-html");
const csrf = require("csurf");
const logger = require("../../config/logger");
const csrfProtection = csrf({ cookie: true });

class CommentDao {
  async findComments({ post_id }) {
    const values = [post_id];
    const query = `
        SELECT id as comment_id, comment, user_id
        FROM comments
        WHERE post_id = $1
      `;

    const { rows } = await client.query(query, values);

    return rows;
  }

  async createComment({ comment, user_id, post_id }) {
    //   const values = [comment, user_id, post_id];
    //   const query = `
    //   INSERT INTO comments
    //   (comment, user_id, post_id)
    //   VALUES($1, $2, $3)
    //   RETURNING id as comment_id, comment, user_id, post_id;
    // `;
    const values = [comment, user_id, post_id];
    const query = `
    INSERT INTO comments
    (comment, user_id, post_id)
    VALUES($1, 1, $3)
    RETURNING id as comment_id, comment, user_id, post_id;
  `;

    const { rows } = await client.query(query, values);

    return rows[0];
  }
}

module.exports = CommentDao;
