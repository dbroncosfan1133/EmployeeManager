var express = require("express");
var db = require("./models");
const routes = require("./routes");


var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Make public a static folder
const root = require("path").join(__dirname, "client", "build");
app.use(express.static(root));
app.use(express.static(path.join(__dirname, "client/public")));

// Use the routes folder
app.use(routes);

// Starting the server, syncing models
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log(
            "==> 🌎 Listening on port %s.  Visit http://localhost%s/ in your browser.",
            PORT,
            PORT
        );
    });
});