const express = require("express");
const { postSignin, postSignup } = require("./auth.controller");

const router = express.Router();

router.post("/signup", postSignup);
router.post("/signin", postSignin);

module.exports = {
  authRouter: router,
};
