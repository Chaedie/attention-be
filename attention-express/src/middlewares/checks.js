const client = require("../../config/db");

exports.serverCheck = async (req, res) => {
  const query = `
      SELECT * FROM users
    `;

  const { rows } = await client.query(query);

  return res.json({ rows });
};

exports.userCheck = (req, res) => {
  if (req.user) {
    res.json({ isLogin: true, user: req.user });
  } else {
    res.json({ isLogin: false });
  }
};
