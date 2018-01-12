var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');
var session = require('express-session');
app.use(session({secret:'codingdojo'}));
app.get('/', function(request, response){
    if (!request.session.views) {
        request.session.views = 1
        var count=request.session.views
    }  
    else  {
        request.session.views++
        var count=request.session.views
    }
    console.log(request.session.views)
    response.render("index", {my_count:count})
})
app.post("/add", function(request, response){
    request.session.views+=1
    response.redirect("/")
})
app.post("/reset", function(request, response){
    request.session.views=0
    response.redirect("/")
})

app.listen(8000, function(){
    console.log("listening on port 8000");
});

