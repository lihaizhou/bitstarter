var fs = require('fs');
var output = "";
fs.readFile('index.html', function(err, data){
 if (err) throw err;
 console.log(data);
 output = data;
});



var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
