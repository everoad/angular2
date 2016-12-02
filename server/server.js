const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

var index = require('./router/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);

// app.get('/*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../src/index.html'));
// });

module.exports = app;
