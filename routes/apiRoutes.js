const getData = require("../Develop/db/db.json")
const express = require("express")
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'db')))


console.log("I work!")

module.exports = function(app) {
    
  
    app.get("/api/notes", function(req, res) {
      return res.json(getData);
    });
  
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