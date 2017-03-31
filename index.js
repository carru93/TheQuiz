var express = require("express");ù
var app = express();
var path = require("path");
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static(path.join(__dirname+"/public")));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+"main.html"));
});

var server = http.listen(8080, function(req, res){
	var host = server.address().adress;
	var port = server.address().port;
	console.log("in ascolto su %s%s",host,port);
});


