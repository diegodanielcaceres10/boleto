// Define modules
const express = require("express");

const boletoRoute = require("./routes/boletoRoute");

// Define app
const app = express();
app.use("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,enctype,Accept,x-access-token,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

// Define routes
app.use("/boleto/", boletoRoute);

module.exports = app;
