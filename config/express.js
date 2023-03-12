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
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Redis 설정 - redisClient
const Redis = require("redis");
const { errorHandlerWrapper } = require("../src/middlewares/errorhandler");
const passport = require("passport");
const redisClient = new Redis.createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  legacyMode: true,
});
redisClient.connect().then().catch(console.error);

// Redis 설정 - redisStore
const RedisStore = require("connect-redis")(session);
const redisStore = new RedisStore({
  client: redisClient,
  prefix: "redis:",
  ttl: 1 * 60 * 60,
});
// Session 설정
app.use(cookieParser(process.env.REDIS_PASSWORD));
const sessionOption = {
  resave: false,
  saveUninitialized: true,
  secret: process.env.REDIS_PASSWORD,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  store: redisStore,
};
if (process.env.NODE_ENV === "production") {
  sessionOption.proxy = true; // nginx 사용할 떄 true가 필요하다.
  // sessionOption.cookie.secure = true; // https 적용하면 필요
}
app.use(session(sessionOption));
const passportConfig = require("../passport");
passportConfig();
app.use(passport.session());

//

// TODO: 없애야됨 Redis Check Controller
async function redisCheckFunction(req, res) {
  console.log(req.session);
  redisClient.get("redis:test", async (err, data) => {
    if (err) console.error(err);
    if (data) {
      res.json(data);
    } else {
      redisClient.set("redis:test", "goooooooood!!!!");
    }
  });
}

app.get("/redis-check", errorHandlerWrapper(redisCheckFunction));

module.exports = app;
