const passport = require("passport");
const errors = require("../../errors");
const AuthService = require("./auth.service");
const authService = new AuthService();
const jwt = require("jsonwebtoken");

exports.postSignup = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(errors.notFound("email, password를 채워주세요."));
  }

  await authService.postSignup(email, password);
  res.json({ message: "ok" });
};

exports.login = async (req, res, next) => {
  const accessToken = jwt.sign({ user_id: req.user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.status(200).json({ message: "login success", accessToken });
};
