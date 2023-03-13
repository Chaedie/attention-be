const express = require("express");
const { postSignup, login } = require("./auth.controller");
const { errorHandlerWrapper } = require("../middlewares/errorhandler");
const { userCheck } = require("../middlewares/checks");
const passport = require("passport");

const router = express.Router();

router.post("/signup", errorHandlerWrapper(postSignup));
router.post("/signin", passport.authenticate("local", { failureMessage: true }), errorHandlerWrapper(login));
router.get("/check", errorHandlerWrapper(userCheck));

module.exports = {
  authRouter: router,
};
