var mysql = require('mysql');

var db = require('./db');

var connect = mysql.createConnection(db);

var conn = connect.connect((err) =>{
  if(err) {
     console.log(err.stack);
  } else {
    console.log('Connect!');
  }
});

module.exports = connect;
