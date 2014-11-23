var assert  = require('assert')
	, chai    = require('chai')
	, Jgrep = require( '../lib/jagrep.js' );

var input    = [ 'test', 'another test', 1234, 'a string' ];

it('in: positive result', function () {
	var r = Jgrep.in( input, 'a string' );
	assert( r, 'returned truth' );
	var s = Jgrep.in( input, 'peace on earth' );
	chai.assert.notOk( s, 'returned false (boo-hoo)' );
} );
