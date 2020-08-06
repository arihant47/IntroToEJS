var express = require("express");
var app = express();

// To tell express to look into another directory wgere the stylesheet is present
app.use(express.static("public"));

// If you don't want to write home.ejs, posts.ejs etc etc use this simply write home, posts etc
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");	
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet", author: "Colt"},
		{title: "Embrace the nature!", author: "Arihant"}
	]
	res.render("posts", {posts: posts});
});

app.listen(3000, function(){
	console.log("Server listening on port 3000");
});