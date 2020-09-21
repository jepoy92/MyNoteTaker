const db = require("../Develop/db/db.json");

module.exports = function(app) {
    
  
    app.get("/api/notes", function(req, res) {
      res.json(db);
    });
  
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