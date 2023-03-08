const AuthService = require("./auth.service");
const authService = new AuthService();

exports.postSignup = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next("error: no body");
  }

  await authService.postSignup(email, password);
  res.json({ message: "ok" });
};

exports.postSignin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next("error: no body");
  }

  const { accessToken, user_id } = await authService.postSignin(email, password);
  req.session.user = { user_id };

  res.json({ message: "ok", accessToken });
};
