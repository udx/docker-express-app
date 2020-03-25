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
app.use(function(req,res,next){
  console.log('req', req.originalUrl, JSON.stringify(req.headers) );
  res.set('Server', process.env.HOSTNAME || 'unknown' );
  next();
});

app.get( '/healthz', function( req, res ) {
  res.send( {ok:true,message: "health up",env: process.env.NODE_ENV });
});

app.get( '/actuator/health', function( req, res ) {
  res.send( {ok:true,message: "health up",env: process.env.NODE_ENV });
});

app.get( '/api/health/ready', function( req, res ) {
  res.send( {ok:true,message: "health ready",env: process.env.NODE_ENV });
});

app.get( '/api/health/live', function( req, res ) {
  res.send( {ok:true,message: "health live",env: process.env.NODE_ENV });
});

app.get( '/api/env', function( req, res ) {
  res.send( process.env );
});

app.use(serveStatic( _static, {'index': ['index.html', 'default.htm']}));

app.use( function( req, res ) {
  res.send( 'Sample express server here.' );
});

app.listen( process.env.NODE_PORT || 80, process.env.HOST || '0.0.0.0', function() {
  console.log( 'Express server online. Using [%s] static directory.', _static, this.address() );
});
