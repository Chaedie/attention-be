exports.errorHandlerWrapper = controller => {
  return (req, res, next) => {
    controller(req, res, next).catch(err => {
      console.error(err);
      next(err);
    });
  };
};
