const client = require("../../config/db");

exports.getAllTodos = async (offset, pageSize) => {
  const values = [offset, pageSize];
  const query = `
    SELECT *
    FROM todos
    OFFSET $1
    LIMIT $2;
  `;

  const { rows } = await client.query(query, values);
  console.log(rows);
  return rows;
};

exports.createTodo = async todo => {
  const values = [todo];
  const query = `
    INSERT INTO todos
    (todo, "isCompleted")
    VALUES($1, false)
    RETURNING id, todo, "isCompleted";
  `;

  const { rows } = await client.query(query, values);

  return rows;
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

  return rows;
};

exports.deleteTodo = async id => {
  const values = [id];

  const query = `
  DELETE FROM public.todos
  WHERE id=$1;
  `;

  const { rows } = await client.query(query, values);

  return rows;
};
