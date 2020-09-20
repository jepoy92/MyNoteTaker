const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'db')));
app.use(express.static(path.join(__dirname, 'routes')));
//Routing

module.exports = function(app){ 
    app.get('/notes', function (request, response) {
        // get all body stuff from request.body object
        // get all request parameter stuff from request.params object
        
        // respond with: response.send()
        response.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });
    
    //anything other than notes gets served the index page
    app.get('*', function (request, response) {
        // get all body stuff from request.body object
        // get all request parameter stuff from request.params object
        
        // respond with: response.send()
        response.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    
    });
}