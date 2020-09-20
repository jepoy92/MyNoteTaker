
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// PORT number
let PORT = process.env.PORT || 3000;

// Allows express to parse user data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("db"));

// Routes to API/HTML routes

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});