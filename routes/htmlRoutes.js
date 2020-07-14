var path = require("path");

// Routing

module.exports = function(app){
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname,"../pageLayout/notes.html"))
    });
    
app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname,"../pageLayout/index.html"))
});

};