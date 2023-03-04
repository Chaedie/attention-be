const express = require("express");
const { postSignin, postSignup } = require("./auth.controller");

const router = express.Router();

router.post("/signup", postSignin);
router.post("/signin", postSignup);

module.exports = {
  authRouter: router,
};
