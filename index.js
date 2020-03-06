var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/usuarios', function (req, res) {
  res.json([ {nome:"zeca urubu"},{nome:"marreco maneiro"}]);
});

app.get('/usuarios/:id', function (req, res) {
  res.json( {nome:"marreco maneiro"});
});

app.post('/usuarios', function (req, res) {
  res.json( req.body);
});

app.put('/usuarios/:id', function (req, res) {
  res.json( req.body);
});

app.delete('/usuarios/:id', function (req, res) {
  res.send("usuario deletado");
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});