const getData = require("../Develop/db/db.json");




module.exports = function(app) {
    
  
    app.get("/api/notes", function(req, res) {
      res.json(getData);
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