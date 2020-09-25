// const db = require("../Develop/db/db.json");
const fs = require("fs");
const path = require("path")
const db = require("./db.json")

module.exports = function(app) {
    
  
  app.get('/api/notes', (request, response) => {
      return response.json(db)
    })
  
 let id = 0;
  
  
    app.post("/api/notes", function(req, response) {
      req.body.id = ++id;
      db.push(req.body);
      response.json(req.body);
    
    });

    app.delete("/api/notes/:id", function(req, response) {
      const deleteId = req.params.id;
      const idIndex = db.findIndex((data) => data.id == deleteId);
      db.splice(idIndex, 1);
      response.json({ok: true});
    });
  
  };