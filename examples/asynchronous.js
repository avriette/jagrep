#!/usr/bin/env node

var Jgrep = require( './jgrep.js' );

var test    = [ 'test', 'another test', 1234, 'a string' ]
	, promise = undefined;

promise = Jgrep.async(
	{ 'expression': new RegExp( '^test$' ) }
	, test
);

promise.then( console.log );

promise = undefined;

var rval = Jgrep.async(
	{ 'function' : function (t) { if ( t == 'test' ) return 1 } }
	, test
	, console.log
);
