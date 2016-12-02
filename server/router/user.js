const express = require('express');

const router = express.Router();

const userModel = require('../model/userModel');

router.post('/login', (req, res, next) => {
  var user_email = req.body.user_email;
  var user_pwd = req.body.user_pwd;
  userModel.login([user_email, user_pwd], (rows) => {
    res.json(rows[0]);
  });
});


router.post('/', (req, res, next) => {
  console.log(req.body.user_email);
  userModel.join([req.body.user_email, req.body.user_pwd], (insertId) => {
    res.json({
      insertId: insertId
    });
  });
});

module.exports = router;
