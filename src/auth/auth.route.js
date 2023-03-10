const express = require("express");
const { postSignin, postSignup } = require("./auth.controller");
const { errorHandlerWrapper } = require("../middlewares/errorhandler");
const { userCheck } = require("../middlewares/checks");

const router = express.Router();

router.post("/signup", errorHandlerWrapper(postSignup));
router.post("/signin", errorHandlerWrapper(postSignin));
router.get("/check", errorHandlerWrapper(userCheck));

module.exports = {
  authRouter: router,
};
