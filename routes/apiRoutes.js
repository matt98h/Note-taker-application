// JSON parse
var noteData =require("../db/db.json");
var parsedData = JSON.stringify(noteData);
var data = [];

module.exports = function(app){

app.get("/api/notes", function(req,res){
res.JSON.parse(noteData);
})

app.post("/api/notes" , function(req,res){
    if(noteData !== ""){
       data.push(req.body);
        res.json(req.body);
        
    }
    else {
        noteData.push(req.body);
        res.json(false)
    }
})

app.post("/api/delete", function(req,res){

})

}