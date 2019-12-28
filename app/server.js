#!/usr/local/bin/node


var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var express = require( 'express' );
var app = express();

var _static = 'static/helios';

if( process.argv[2] ) {
  _static = require( 'path' ).join( 'static', process.argv[2] );
}

//console.log( process.argv );

app.get( '/healthz', function( req, res ) {
  res.send( {ok:true,message: "health up",env: process.env.NODE_ENV });
});

app.use(serveStatic( _static, {'index': ['index.html', 'default.htm']}));

app.use( function( req, res ) {
  res.send( 'Sample express server here.' );
});

app.listen( process.env.PORT || 80, process.env.HOST || '0.0.0.0', function() {
  console.log( 'Express server online. Using [%s] static directory.', _static, this.address() );
});