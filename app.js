//dependencies
var express = require('express');
var path = require('path');
var fs = require("fs");
var ejs = require("ejs");
var app = express();
var request = require('request');


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));

// app.use(express.static(path.join(__dirname, 'public')));

// // app.locals.appdata = require('./data.json');
// //middleware
// var methodOverride = require('method-override');
// app.use(methodOverride('_method'));

//config
var port = process.env.PORT ||  3000
app.listen(port, function() {
  console.log("I'm listening on 3000!");
});

app.get('/', function(req,res){
    var html = fs.readFileSync('./views/index.html.ejs', 'utf8');
    var rendered = ejs.render(html);
    res.send(rendered);
})



