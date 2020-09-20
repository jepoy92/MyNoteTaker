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
    app.get('/api/notes', function (request, response) {
        // respond with: content of db.json
        return response.json(JSON.parse(fs.readFileSync('./db/db.json')));
    });
    
    app.post('/api/notes', function (request, response) {
        // get all body stuff from request.body object
        // get all request parameter stuff from request.params object
        let newNote = request.body;
        let existingNotes = JSON.parse(fs.readFileSync('./db/db.json'));
        let id = 1;
        while
            (existingNotes.some((value, index) => {
                return value.id === id
            })) {
            id++
        }
        newNote.id = id;
        existingNotes.push(newNote);
        console.log("adding new note");
        fs.writeFileSync('./db/db.json', JSON.stringify(existingNotes));
        response.json(newNote);
    });
    
    app.delete('/api/notes/:id', function (request, response) {
        // get all body stuff from request.body object
        // get all request parameter stuff from request.params object
        let existingNotes = JSON.parse(fs.readFileSync('./db/db.json'));
        let id = parseInt(request.params.id);
        console.log("deleting note with id: " + id);
        existingNotes = existingNotes.filter(note => {
            return note.id !== id
        });
        console.log("updated notes are now: " + existingNotes);
        fs.writeFileSync('./db/db.json', JSON.stringify(existingNotes));

        response.json(existingNotes);
    
    });
}