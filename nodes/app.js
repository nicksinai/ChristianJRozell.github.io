//create boiler plate
//create the route/route handler
//have input box send post request to the controller
//create a javascript array
//have controller add the data on the list
//have the list shown to the user
const express = require("express");
const app = express();
const port = 3000;
const secrets = require("../secrets/secrets");
const mongoose = require("mongoose");
const mongoDB = secrets.connection_string;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const routes = require("./Routes/routes.js");
app.use("/routes", routes);
