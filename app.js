
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var path = require('path');
var http = require('http').Server(app);
//configure nunjucks
nunjucks.configure(__dirname + '/views', {
  autoescape: true,
  express   : app
});
//
//for the live reload mechanism (see gulpfile)
app.use(require('connect-livereload')({
    port: 35729
}));
app.use(express.static('dist'));
app.set('view engine', 'nunjucks');


//views
app.get('/', function(req, res){
    res.render(path.normalize(__dirname + "/views/index.njk"));
});


//start server
http.listen(3002, function() {
    console.log("listening on: *:3002");
});

