const errors = require("../../errors");
const AuthService = require("./auth.service");
const authService = new AuthService();

exports.postSignup = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(errors.notFound("email, password를 채워주세요."));
  }

  await authService.postSignup(email, password);
  res.json({ message: "ok" });
};

exports.postSignin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(errors.notFound("email, password를 채워주세요."));
  }

  const { accessToken, user_id } = await authService.postSignin(email, password);
  req.session.user = { user_id };

  res.json({ message: "ok", accessToken });
};
