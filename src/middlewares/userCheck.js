exports.userCheck = (req, res) => {
  if (req.session.user) {
    res.json({ isLogin: true, user: req.session.user });
  } else {
    res.json({ isLogin: false });
  }
};
