import express from 'express';

var app = express();
var defaultPort = 3003;
var port = process.env.PORT || defaultPort;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});