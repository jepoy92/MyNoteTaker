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

// get all request parameter stuff from request.params object
// get all body stuff from request.body object

module.exports = function(app){ 
    app.get('/notes', function (request, response) {
        // get all body stuff from request.body object
        // get all request parameter stuff from request.params object
        
        // respond with: response.send()
        response.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    //anything other than notes gets served the index page
    app.get('*', function (request, response) {
        // get all body stuff from request.body object
        // get all request parameter stuff from request.params object
        
        // respond with: response.send()
        response.sendFile(path.join(__dirname, "../public/index.html"));
    
    });
}