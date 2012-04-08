var http    = require('http');
var express = require('express');
var routes  = require('./routes');

var app = module.exports = express.createServer();

// Configuration
app.register('.html', require('ejs'));
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }) );
});

app.configure('production', function() {
  app.use( express.errorHandler() );
});

// Routes
app.get( '/', function ( req, res ) {
    res.render( 'index.html', {
        title: 'Wiki revisor'
    });
});

app.get( '/single_query/:lang/:query', routes.grab );
app.get( '/query/:lang/:query', routes.search );

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
