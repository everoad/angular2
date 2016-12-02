var conn = require('./config/connect');

exports.getList = function(params, callback) {
  var sql = 'SELECT * FROM board LIMIT ?, ?';
  conn.query(sql, params, (err, rows, fields) => {
    callback(rows);
  });
}

exports.getContent = function(params, callback) {
  var sql = 'SELECT * FROM board WHERE bd_id = ?';
  conn.query(sql, params, (err, rows, fields) => {
    callback(rows);
  });
}

exports.addContent = function(params, callback) {
  var sql = 'INSERT INTO board(bd_title, bd_content, bd_author, bd_created) VALUES (?, ?, 1, now())';
  conn.query(sql, params, (err, result) => {
    if(err) { console.error(err.stack)};
    callback(result.insertId);
  });
}

exports.deleteContent = function(params, callback) {
  var sql = 'DELETE FROM board WHERE bd_id = ?';
  conn.query(sql, params, (err, result) => {
    if(err) { console.error(err.stack)};
    callback(result.affectedRows);
  })
}

exports.editContent = function(params, callback) {
  var sql = 'UPDATE board SET bd_title = ?, bd_content =? WHERE bd_id = ?';
  conn.query(sql, params, (err, result) => {
    console.log(result);
    callback(result.affectedRows);
  })
}
