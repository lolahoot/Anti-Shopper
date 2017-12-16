const express = require ("express");
const app = express();
const port = process.env.PORT || 7000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require ("mongoose");

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/anti-shopper",
  {useMongoClient: true},
  err => {
    if (err) throw err;
    console.log("Connected to the database");
  }
);

app.use("/customer", require("./routes/customerRoutes"));
// app.use("/shopper", require("./routes/shopperRoutes"));

app.listen(port, () => {
  console.log(`antiShopper is listening on port ${port}.`);
});
