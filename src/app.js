const app = require("../config/routes");
const PORT = process.env.PORT;
const client = require("../config/db");
const logger = require("../config/logger");



app.listen(PORT, () => {
  logger.info(`server is on ${PORT}`);
});
