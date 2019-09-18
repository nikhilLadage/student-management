const express = require("express");
const session = require("express-session");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors"); //used for connect middleware
const fs = require("fs");
const path = require("path");
var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://crud-b5854.firebaseio.com"
});
//var admin = require("firebase-admin");
//var routes = require("./routes/routes.js");
// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});
app.set('trust proxy', 1);
app.use(session({
    secret: "ssshhhhh",
    resave: false,
    saveUninitialized: true,
    cookie: {secure:true}
}));
app.locals.sess; //Set global session

// /*MIDDLEWARE*/
app.use(cors());
app.use(express.static(path.join(__dirname, "../client")));//Connect client-side view
app.use(bodyParser.urlencoded({
  extended: false
})); //To support URL-encoded bodies
app.use(bodyParser.json()); //To support JSON encoded bodies

app.use("/", require("./routes/indexRoutes.js"));
var routes = require("./routes/commonRoutes")(app);
var port = process.env.PORT || 8000;
var host = '0.0.0.0';
app.listen(port, host, function(){
	console.log("running at http://localhost:" + port);
});
app.on("error", function(error){
  console.log("Error", error);
});

module.exports = app;
