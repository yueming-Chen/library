var express = require('express');

var app = express();

app.use(express.static('www'));

var port = 3000;
app.listen(port,function(){
	console.log('listen on Port : ' + port);
});