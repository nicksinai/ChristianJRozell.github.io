//create boiler plate
//create the route/route handler
//have input box send post request to the controller
//create a javascript array
//have controller add the data on the list
//have the list shown to the user
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const routes = require("./Routes/routes.js");
app.use("/Routes/routes", routes);
