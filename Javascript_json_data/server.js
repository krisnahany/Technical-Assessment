var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
      // var allData = JSON.parse(data);
      
      // var result = Object.entries(allData.reduce((acc, { username, hair_color, height }) => {

      // }, {}))
       
      // console.log(result);
   });
})

var server = app.listen(8081, function () {
//    var host = server.address().address
   var port = server.address().port
   console.log("Test app listening on port", port)
})