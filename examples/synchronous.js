#!/usr/bin/env node

var Jgrep = require( 'jagrep.js' );

var test    = [ 'test', 'another test', 1234, 'a string' ]
	, results = [ ];

results = Jgrep.sync(
	{ 'expression': new RegExp( '^test$' ) }
	, test
);

console.log( results );

results = [ ];

results = Jgrep.sync(
	{ 'function': function (t) { if ( t == 'test' ) return 1 } }
	, test
);

console.log( results );
