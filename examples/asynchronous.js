#!/usr/bin/env node

/*

  Example for asynchronous usage of jagrep

*/
var Jgrep = require( 'jagrep' );

var test    = [ 'test', 'another test', 1234, 'a string' ]
	, promise = undefined;

/*
  As with sync(), the first argument provided to async() should be a hash
  with either 'function' or 'expression' as a key. The return value will
  be a promise of a list that will be complete when the operation is
  complete.
*/

promise = Jgrep.async(
	{ 'expression': new RegExp( '^test$' ) }
	, test
);

/*
  See the documentation for q for more information on promises.
*/

promise.then( console.log );

promise = undefined;

/*
  If a function is supplied as the third argument to async(), it will be
  called with a promise to the results of the operation. As with sync(),
  the supplied test function will be called for each element in the supplied
  list.
*/
var rval = Jgrep.async(
	{ 'function' : function (t) { if ( t == 'test' ) return 1 } }
	, test
	, console.log
);
