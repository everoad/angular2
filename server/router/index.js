const express = require('express');
var router = express.Router();

var user = require('./user');
var board = require('./board');

router.use('/user', user);
router.use('/board', board);

module.exports = router;
