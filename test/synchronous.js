var assert  = require('assert');
var Jgrep = require( '../lib/jgrep.js' );

var input    = [ 'test', 'another test', 1234, 'a string' ]
	, results = [ ];

it('Expression (synchronous): object returned', function () {
	var r = Jgrep.sync( { 'expression': new RegExp( '^test$' ) }, input );
	assert.equal( typeof r, 'object' )
} );

it('Expression (synchronous): correct value returned', function () {
	assert.deepEqual(
		Jgrep.sync( { 'expression': new RegExp( '^test$' ) }, input )
		, [ 'test' ]
	)
} );

it('Function (synchronous): object returned', function () {
	var r = Jgrep.sync( { 'function': function (t) { if ( t == 'test' ) return 1 } }, input );
	assert.equal( typeof r, 'object' )
} );

it('Function (synchronous): correct value returned', function () {
	assert.deepEqual(
		Jgrep.sync( { 'function': function (t) { if ( t == 'test' ) return 1 } }, input )
		, [ 'test' ]
	)
} );
