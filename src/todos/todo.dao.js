const client = require("../../config/db");

exports.getAllTodos = async (user_id, offset, pageSize) => {
  const values = [user_id, offset, pageSize];
  const query = `
    SELECT *
    FROM todos
    WHERE user_id = $1
    ORDER BY created_at
    OFFSET $2
    LIMIT $3;
  `;

  const { rows } = await client.query(query, values);

  return rows;
};

exports.createTodo = async (user_id, todo) => {
  const values = [user_id, todo];
  const query = `
    INSERT INTO todos
    (todo, "isCompleted", user_id)
    VALUES($2, false, $1)
    RETURNING id, todo, "isCompleted";
  `;

  const { rows } = await client.query(query, values);

  return rows[0];
};

exports.updateTodo = async (id, todo, isCompleted) => {
  const values = [id, todo, isCompleted || "false"];

  const query = `
    UPDATE public.todos
    SET todo=$2, "isCompleted"=$3
    WHERE id=$1
    RETURNING id, todo, "isCompleted";
  `;

  const { rows } = await client.query(query, values);

  return rows[0];
};

exports.deleteTodo = async todo_id => {
  const values = [todo_id];

  const query = `
  DELETE FROM public.todos
  WHERE id=$1;
  `;

  const { rows } = await client.query(query, values);

  return rows[0];
};
