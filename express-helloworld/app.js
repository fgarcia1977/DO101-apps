var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/ferny', function(req, res) {
  res.send('Hola Fernando!\n Esto no está mal...');
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

