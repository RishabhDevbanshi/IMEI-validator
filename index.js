const express = require("express");
const cors = require('cors');
require('dotenv').config();


const app = express();
const route = require('./routes/routes');

app.use(cors());
const port = 3000;

//for parsing data from html form
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//setting up endpoints
app.use('/',route);

app.listen(process.env.PORT || port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started at http://localhost:${port}`);
  }
});
