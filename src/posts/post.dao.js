const client = require("../../config/db");
const sanitizeHtml = require("sanitize-html");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });

exports.getAllPosts = async ({ user_id, offset, pageSize }) => {
  // const values = [user_id, offset, pageSize];
  // const query = `
  //   SELECT *
  //   FROM posts
  //   WHERE user_id = $1
  //   ORDER BY created_at
  //   OFFSET $2
  //   LIMIT $3;
  // `;
  const values = [offset, pageSize];
  const query = `
    SELECT *
    FROM posts
    ORDER BY created_at DESC
    OFFSET $1
    LIMIT $2;
  `;

  const { rows } = await client.query(query, values);

  console.log(rows);
  return rows;
};

exports.createPost = async ({ user_id, title, content }) => {
  // const values = [user_id, title, content];
  // const query = `
  //   INSERT INTO posts
  //   (user_id, title, content)
  //   VALUES($1, $2, $3)
  //   RETURNING id, title, content;
  // `;
  const values = [title, content];
  const query = `
    INSERT INTO posts
    (user_id, title, content)
    VALUES(1, $1, $2)
    RETURNING id, title, content;
  `;

  const { rows } = await client.query(query, values);

  return rows[0];
};

exports.updatePost = async ({ post_id, title, content }) => {
  const values = [post_id, title, content];

  const query = `
    UPDATE public.posts
    SET title=$2, content=$3
    WHERE id=$1
    RETURNING id, title, content;
  `;

  const { rows } = await client.query(query, values);

  return rows[0];
};

exports.deletePost = async post_id => {
  const values = [post_id];

  const query = `
  DELETE FROM public.posts
  WHERE id=$1;
  `;

  const { rows } = await client.query(query, values);

  return rows[0];
};
