var assert = require('assert');
var Jgrep  = require( '../lib/jgrep.js' );

var test    = [ 'test', 'another test', 1234, 'a string' ];

it( 'Expression (asynchronous): object returned', function () {
	Jgrep.async(
		{ 'expression': new RegExp( '^test$' ) }
		, test
	).then(
		function (r) {
			assert( typeof r, 'object' )
		}
	)
} );

it( 'Function (asynchronous): correct value returned', function () {
	Jgrep.async(
		{ 'function' : function (t) { if ( t == 'test' ) return 1 } }
	, test
	, function (r) {
			assert.equal( r, [ 'test' ] )
		}
	) }
);
