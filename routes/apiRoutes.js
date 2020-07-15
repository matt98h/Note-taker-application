// JSON parse
var noteData =require("../db/db.json");
const moment = require("moment");
const { isMoment } = require("moment");

var data = [];

module.exports = function(app){

app.get("/api/notes", function(req,res){
res.json(noteData);
})

app.post("/api/notes" , function(req,res){
   var userData = JSON.parse
   
   
    if(noteData !== ""){
       noteData.push(req.body);
       
        res.json(noteData.concat());
        noteData.id = isMoment();
        
    }
    else {
        noteData.push(req.body);
        res.json(false)
    }
})

app.post("/api/delete", function(req,res){

})

}