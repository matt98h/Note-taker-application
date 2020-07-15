// JSON parse
var noteData = require("../db/db.json");
var data = [];
id = data


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        var updatedJson = noteData.concat(req.body);

        res.json(noteData);
    })

    app.post("/api/notes", function (req, res) {
        data.push(req.body)
        
        for (let i = 1; i < noteData.length; i++) {

            noteData[i].id = i;
            
        }
        if (noteData !== "") {


            noteData.push(req.body);
            console.log(noteData)
            res.json(noteData.concat());
            
        }
        else {
            noteData.push(req.body);
            res.json(false)
        }
    })

    app.delete("/api/delete/:id", function (req, res) {
        
    })

}