// JSON parse
var noteData = JSON.parse(require("../db/db.json"))
var moment = require("moment");


module.exports = function(app){

app.get("/api/notes", function(req,res){
res.json(noteData);
})

app.post("/api/notes" , function(req,res){
    if(noteData.noteTitle.val !== "" && noteData.noteText.val !== ""){
        noteData.push(req.body);
        res.json(true);
        
    }
    else {
        noteData.push(req.body);
        res.json(false)
    }
})

app.post("/api/delete", function(req,res){

})

}