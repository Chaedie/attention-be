const client = require("../../config/db");

class AuthDao {
  async findOneUser(email) {
    const values = [email];
    const query = `
      SELECT email
      FROM users
      WHERE email = $1
    `;

    const { rows } = await client.query(query, values);

    return rows;
  }

  async createUser(email, password) {
    const values = [email, password];
    const query = `
      INSERT INTO public.users
      (email, "password", session_id)
      VALUES($1, $2, null);
    `;

    const { rows } = await client.query(query, values);

    return rows;
  }
}

module.exports = AuthDao;
