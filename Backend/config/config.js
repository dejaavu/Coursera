var mysql = require('mysql');
var info = require('info.json');

var conn = mysql.createConnection(info);
conn.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

module.exports = conn;
