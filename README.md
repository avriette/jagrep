jagrep
====

Node lacks a `grep` function. It should be pointed out that jquery *has* a [grep](http://api.jquery.com/jquery.grep/). For my own purposes, it was helpful from a design pattern standpoint, to have something that reminded me of perl's [grep](http://perldoc.perl.org/functions/grep.html). I wanted a simple interface that provided both synchronous and asynchronous interfaces to pattern-matching list transforms, and I wanted a syntax that was familiar to me. For many users, [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) will probably be sufficient.

The `grep` implemented in this package *is not optimised for performance*, and likely is not The Best Way&trade;.

Interface
=====

* `var results = Jagrep.sync( { 'expression': new RegExp( '^test$' ) }, list )`
* `var results = Jagrep.sync( { 'function' : function (t) { if ( t == 'test' ) return 1 } }, list )`
* `var promise = Jagrep.async( { 'expression': new RegExp( '^test$' ) }, list )`
* `Jagrep.async( { 'function' : function (t) { if ( t == 'test' ) return 1 } }, list, callback )`

License
=====

This software is released under a [Creative Commons "CC0" license](https://github.com/avriette/jgrep/blob/master/LICENSE). Basically, do what you like with it.

&copy; [@avriette](https://github.com/avriette) / jane avriette / [jane@cpan.org](mailto:jane@cpan.org)
