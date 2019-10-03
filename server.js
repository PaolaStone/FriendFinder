var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

// creating express server
var app = express();

var PORT = process.env.PORT || 8080;

//Data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//TODO: app.use(express.static(__dirname + "/app/css"));

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});