var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
  console.log('App listening on PORT: ' + port);
});
