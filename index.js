var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/', function(req, res) {
    res.send('index.html');
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("server running at http://%s:%s", host, port);
});