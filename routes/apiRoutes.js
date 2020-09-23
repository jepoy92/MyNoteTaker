const db = "../Develop"

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();


module.exports = function(app) {
    
  
  app.get('/api/notes', (req, res) => {
    return res.JSON.parse(fs.readFileSync('../Develop/db/db.son'))
    console.log("SUP")
})
  
 let id = 0;
  
  
    app.post("/api/notes", function(req, res) {
      req.body.id = ++id;
      getData.push(req.body);
      res.json(req.body);
    
    });

    app.delete("/api/notes/:id", function(req, res) {
      const deleteId = req.params.id;
      const idIndex = getData.findIndex((data) => data.id == deleteId);
      getData.splice(idIndex, 1);
      res.json({ok: true});
    });
  
  };