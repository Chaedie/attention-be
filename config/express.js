const morgan = require("morgan");
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

const helmet = require("helmet");
const hpp = require("hpp");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const logger = require("./logger");
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy");
  app.use(morgan("combined"));
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: false,
    }),
  );
  app.use(hpp());
} else {
  app.use(morgan("dev"));
}

// Redis Setting
// const redis = require("redis");

// const RedisStore = require("connect-redis")(session);

// const redisClient = redis.createClient({
//   url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`,
//   legacyMode: true, // 반드시 설정 !!
// });
// redisClient.on("connect", () => {
//   logger("info", "Redis Connected!");
// });
// redisClient.on("error", err => logger.error("Redis Client Error"));
// redisClient.connect().then();
// const redisCli = redisClient.v4;
// const redisStore = new RedisStore({ client: redisClient });

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
app.use(cookieParser(process.env.REDIS_PASSWORD));
const sessionOption = {
  resave: false,
  saveUninitialized: true,
  secret: process.env.REDIS_PASSWORD,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  // store: redisStore,
};
if (process.env.NODE_ENV === "production") {
  sessionOption.proxy = true; // nginx 사용할 떄 true가 필요하다.

  // sessionOption.cookie.secure = true; // https 적용하면 필요
}
app.use(session(sessionOption));

module.exports = app;
