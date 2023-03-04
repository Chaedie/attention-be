const app = require("../config/routes");
const PORT = 3000;
const client = require("../config/db");

app.listen(PORT, () => console.log(`server is on ${PORT}`));
