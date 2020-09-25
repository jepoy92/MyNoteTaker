// const db = require("../Develop/db/db.json");
const fs = require("fs");
const path = require("path")
const db = require("./db.json")

module.exports = function(app) {
    
  
  app.get('/api/notes', (request, res) => {
    const filePath = path.join(__dirname,"db.json")
    fs.readFile(filePath, "utf8", function(error, data){
      console.log(data)
      return res.json(data)
    })
})
  
 let id = 0;
  
  
    app.post("/api/notes", function(req, res) {
      req.body.id = ++id;
      db.push(req.body);
      res.json(req.body);
    
    });

    app.delete("/api/notes/:id", function(req, res) {
      const deleteId = req.params.id;
      const idIndex = db.findIndex((data) => data.id == deleteId);
      db.splice(idIndex, 1);
      res.json({ok: true});
    });
  
  };