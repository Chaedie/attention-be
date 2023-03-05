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
  const sessionId = req.signedCookies["connect.sid"];

  if (!email || !password) {
    next("error: no body");
  }

  await authService.postSignin(email, password, sessionId);

  res.json({ message: "ok" });
};
