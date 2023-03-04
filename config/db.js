const pg = require("pg");
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
    console.error("db connection error", err.stack);
  } else {
    console.log("db connection success");
  }
});

module.exports = client;
