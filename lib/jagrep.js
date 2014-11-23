/*
	jagrep.js - a grep interface jane likes.

	(she might be picky about lists)
*/

// Perform a synchronous (no-promise, blocking) grep
//
exports.sync = function ( Arguments, List ) {
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

// Perform an asynchronous (promise, but probably still blocking) grep
//
exports.async = function ( Arguments, List, Callback ) {
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

// Just figure out whether Test exists in List
//
exports.in = function ( List, Test ) {
	var yes = false;

	List.forEach( function (t) {
		if (t == Test) {
			yes = true;
		}
	} )

	return yes;

}

// Return all the values of List that are also in Test_List ('intersection')
// It's not really super complicated but it is a nice idiom to have a shorthand
// for.
//
exports.all_in = function ( List, Test_List ) {
	var results = [ ];

	List.forEach( function (record) {
		exports.sync( { 'function': function (t) { if (t == record) return true } } )
	} ).forEach( function (r) { results.push( r ) } );

	return results;

}

// jane@cpan.org // vim:tw=80:ts=2:noet
