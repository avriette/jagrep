/*
	jgrep.js - a grep interface jane likes.

	(she might be picky about lists)
*/

function sync ( Arguments, List ) {
	var results = [ ];

	if (Arguments[ 'expression' ]) {
		var expr = Arguments[ 'expression' ];
		// TODO: check expr.constructor == 'RegExp'

		for (var idx in List) {
			var item = List[idx];
			if (expr.test( item )) {
				results.push( item );
			}
		}
	}
	else if (Arguments[ 'function' ]) {
		var f = Arguments[ 'function' ]);
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

