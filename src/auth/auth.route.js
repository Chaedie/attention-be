const express = require("express");
const { postSignin, postSignup } = require("./auth.controller");
const { errorHandlerWrapper } = require("../middlewares/errorhandler");

const router = express.Router();

router.post("/signup", errorHandlerWrapper(postSignup));
router.post("/signin", errorHandlerWrapper(postSignin));

module.exports = {
  authRouter: router,
};
