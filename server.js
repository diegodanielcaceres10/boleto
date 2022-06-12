// Define modules
const dotenv = require("dotenv");
const app = require("./app");
const moment = require("moment");

// Define credentials
dotenv.config({ path: "./config.env" });

// Define listeners and ports
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(moment().format(), `API listening on port ${port}`));
