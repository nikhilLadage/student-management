const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
//var admin = require("firebase-admin");
//var routes = require("./routes/routes.js");


//var routes = require("./routes/routes")(app);
app.use("/", function(req, res, next){
    res.json({
      "Name": "Nikhil1"
    });
});
var port = process.env.PORT || 8080;
var host = '0.0.0.0';
app.listen(port, host, function(){
	console.log("running at http://localhost:" + port);
});
app.on("error", function(error){
  console.log("Error", error);
});

module.exports = app;
