/*
	jagrep.js - a grep interface jane likes.

	(she might be picky about lists)
*/

function sync ( Arguments, List ) {
	if (Arguments[ 'expression' ]) {
		var expr = Arguments[ 'expression' ]
			, results = [ ];
		// TODO: check expr.constructor == 'RegExp'

		for (var idx in List) {
			var item = List[idx];
			if (expr.test( item )) {
				results.push( item );
			}
		}
	}
	else if (Arguments[ 'function' ]) {
		var f = Arguments[ 'function' ]
			, results = [ ];
		// TODO: check for function-ness of f

		for (var idx in List) {
			var item = List[idx];
			if (f(item)) {
				results.push( item );
			}
		}
	}
	else {
		// throw an exception
	}

	return results;
}

function async ( Arguments, List, Callback ) {
	var q = require('q');
	if (Arguments[ 'expression' ]) {
		var expr = Arguments[ 'expression' ]
			, results = [ ];

		return q.all(
			List.map( function (t) {
				if (expr.test(t)) {
					results.push( t );
				}
			} )
		).then( function () {
			return results;
		} );
	}
	else if (Arguments[ 'function' ]) {
		var f = Arguments[ 'function' ]
			, results = [ ];

		return q.all(
			List.map( function (t) {
				if ( f(t) ) {
					results.push( t );
				}
			} )
		).then( function () {
			return Callback( results );
		} );
	}
	else {
		// throw an exception
	}

	return undefined;
}

exports.sync  = sync;
exports.async = async;

// jane@cpan.org // vim:tw=80:ts=2:noet
