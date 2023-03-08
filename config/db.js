const pg = require("pg");
const logger = require("./logger");
const client = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: process.env.POSTGRE_PASSWORD,
  port: 5432,
  max: 5,
});

client.connect(err => {
  if (err) {
    logger.error("db connection error", err.stack);
  } else {
    logger.info("db connection success");
  }
});

module.exports = client;
