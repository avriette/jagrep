#!/usr/bin/env node

/*

  Example for synchronous usage of jagrep

*/

var Jgrep = require( 'jagrep' );

var test    = [ 'test', 'another test', 1234, 'a string' ]
	, results = [ ];

/*
  The first argument provided to sync() should be a hash with either
  'function' or 'expression' as a key.
*/

/*
  With a supplied expression, the returned list will be all elements which
  match the supplied expression.
*/
results = Jgrep.sync(
	{ 'expression': new RegExp( '^test$' ) }
	, test
);

console.log( results );

results = [ ];

/*
  With a supplied function, the returned list will be all elements for which
  the function supplied returned true, given each individual element of the
  supplied list.
*/
results = Jgrep.sync(
	{ 'function': function (t) { if ( t == 'test' ) return 1 } }
	, test
);

console.log( results );
