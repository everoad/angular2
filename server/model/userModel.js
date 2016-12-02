var conn = require('./config/connect');

exports.join = function(params, callback) {
  console.log(params);
  console.log(conn);
  var sql = 'INSERT INTO user(user_email, user_pwd, user_jdate) VALUES (?, ?, now())';
  conn.query(sql, params, (err, result) => {
    callback(result.insertId);
  });
}


exports.login = function(params, callback) {
  var sql = 'SELECT user_id, user_email FROM user WHERE user_email = ? AND user_pwd = ?';
  conn.query(sql, params, (err, rows, fields) => {
    callback(rows);
  });
}
