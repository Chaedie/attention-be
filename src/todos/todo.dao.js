const client = require("../../config/db");

exports.getAllTodos = async () => {
  const query = `
    SELECT *
    FROM todos;
  `;

  const { rows } = await client.query(query);

  return rows;
};

exports.createTodo = async todo => {
  const query = `
    INSERT INTO todos
    (todo, iscompleted)
    VALUES($1, false)
    RETURNING id, todo, iscompleted;
  `;
  const values = [todo];

  const { rows } = await client.query(query, values);
  console.log(rows);
  return [rows];
};
