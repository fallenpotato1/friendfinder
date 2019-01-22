var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require("mysql")
var connection

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(preocess.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "fallenpotato",
        database: "todoagain+_db"
    })
}

connection.connect()
module.exports = connection