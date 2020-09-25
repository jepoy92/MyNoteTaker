const express = require("express");
const path = require("path");
const fs = require("fs");

module.exports = function(app){ 
    app.get('/notes', function (request, response) {

        response.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });
    
   
    app.get('*', function (request, response) {

        response.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    
    });
}