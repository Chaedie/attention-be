const morgan = require("morgan");
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

module.exports = app;
