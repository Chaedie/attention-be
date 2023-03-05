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

  async signinUser(email, password) {
    const values = [email, password];
    const query = `
    SELECT email
    FROM users
    WHERE email = $1 and password = $2
    `;

    const { rows } = await client.query(query, values);

    return rows;
  }

  async createSession(email, sessionId) {
    const values = [email, sessionId];
    const query = `
      UPDATE public.users
      SET session_id=$2
      WHERE email=$1;
    `;

    const { rows } = await client.query(query, values);

    return rows;
  }
}

module.exports = AuthDao;
