var http = require('http');
var fs = require('fs');
var path = require('path');
var mine

http.createServer(function (req, res) {
    var filepath = req.url;
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(index);


}).listen(8080);