var express = require('express');
var app = express();

console.log("Hello World!\n");

app.get('/', function (req, res) {
  res.send('Hello, World!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

module.exports = app;