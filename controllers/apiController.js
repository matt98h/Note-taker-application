
var connection = require("../config/connection.js");
const note = require("../model/note.js");



module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        note.selectNotes()
        .then(response => res.json(response))
    })

    app.post("/api/notes", function (req, res) {
        note.create(req.body.title,req.body.text)
        .then(response => res.json(response))
       .catch(err => console.log(err))
    })

    app.delete("/api/delete/:id", function (req, res) {
        
    })

}