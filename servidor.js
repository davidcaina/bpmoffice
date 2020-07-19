var express = require('express');

var app = express();
var path = require('path');

app.listen(3000, function(){
    console.log("Rodando na porta 3000");
})

app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'src/pages/index.html'))
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname,'src/pages/index.html'))
});

app.get('/problema_1.html', function(req, res) {
    res.sendFile(path.join(__dirname,'src/pages/problema_1.html'))
});

app.get('/problema_2.html', function(req, res) {
    res.sendFile(path.join(__dirname,'src/pages/problema_2.html'))
});