exports.errorHandlerWrapper = controller => {
  return (req, res, next) => {
    controller(req, res, next).catch(err => {
      next(err);
    });
  };
};

exports.errorTester = async (req, res, next) => {
  const randomNumber = Math.random();
  if (randomNumber > 0.5) {
    next({
      code: 501,
      message: "랜덤 넘버가 0.5이상입니다.",
    });
  } else {
    res.json({
      code: 200,
      message: "랜덤 넘버가 0.5 이하입니다.",
    });
  }
};
