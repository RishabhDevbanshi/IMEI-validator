const express = require("express");
const checkIMEI = require("../controllers/checkIMEI");
const route = express.Router();


route.get("/",(req,res)=>{
    res.send('Send Request to endpoint "<strong>/imei</strong>" to validate your IMEI number');
})
route.get("/imei", checkIMEI);

module.exports = route;
