var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'tirth',
  password : 'ths01139',
  database : 'loginsystem'
});
conn.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

module.exports = conn;
