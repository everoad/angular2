var express = require('express');
var router = express.Router();

var boardModel = require('../model/boardModel');

//list
router.get('/', (req, res, next) => {
  boardModel.getList([], (rows) => {
    res.json(rows);
  });
});

//content
router.get('/:id', (req, res, next) => {
  boardModel.getContent([req.params.id], (rows) => {
    res.json(rows[0]);
  });
});


//write
router.post('/', (req, res, next) => {
  var params = req.body;
  console.log(params.bd_title);
  boardModel.addContent([req.body.bd_title, req.body.bd_content], (insertId) => {
    res.json({
      insertId: insertId
    });
  });
});


//remove
router.delete('/:id', (req, res, next) => {

  boardModel.deleteContent([req.params.id], (affectedRows) => {
    res.json({
      affectedRows: affectedRows
    });
  });
});


//edit
router.put('/:id', (req, res ,next) => {
  // var params = Object.keys(req.body).map(key => {
  //   return req.body[key];
  // });
  var bd_title = req.body.bd_title;
  var bd_content = req.body.bd_content;
  var bd_id = req.params.id;
  console.log(bd_title, bd_content, bd_id);
  boardModel.editContent([bd_title, bd_content, bd_id], (affectedRows) => {
    if(affectedRows === 1) {
      res.json({
        bd_id: req.params.id
      });
    } else {
      res.json({
        error: 'update fail'
      });
    }
  })
});


module.exports = router;
