const logger = require("../../config/logger");

exports.errorHandlerWrapper = controller => {
  return (req, res, next) => {
    controller(req, res, next).catch(err => {
      logger.error(err.message);
      next(err);
    });
  };
};
