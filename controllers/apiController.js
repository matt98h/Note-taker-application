
var connection = require("../config/connection.js");
const Note = require("../model/note.js");
const note = require("../model/note.js");



module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        Note.selectNotes()
        .then(response => res.json(response))
    })

    app.post("/api/notes", function (req, res) {
        Note.create(req.body.title,req.body.text)
        .then(response => res.json(response))
       .catch(err => console.log(err))
    })

    app.delete("/api/notes/:id", function (req, res) {
    //   1.) user clicks the trash can button to delete a note
    //   2.) on click we reference the id of the note clicked
    //   3.) using SQL delete the row where id = ?
        note.delete(req.params.id)
        .then(response => res.json(response))
        .catch(err => console.log(err))
    })

}