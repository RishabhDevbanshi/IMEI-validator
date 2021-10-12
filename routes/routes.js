const express = require("express");
const checkIMEI = require("../controllers/checkIMEI");
const route = express.Router();

route.get("/imei", checkIMEI);

module.exports = route;
