"use strict";

require.config({
	
	paths: {
		qunit: ["//code.jquery.com/qunit/qunit-1.12.0", "qunit-1.12.0"],
		jquery: ["//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min", "../js/vendor/jquery-1.10.1.min"],
		underscore: '../js/vendor/underscore-min',
		api: '../js/api',
	},

	shim: {
		'qunit': {
			exports: 'QUnit',
				init: function() {
					QUnit.config.autoload = false;
					QUnit.config.autostart = false;
				}
		},
		'underscore': {
			exports: '_'
		},		
	},
	waitSeconds: 3,
	urlArgs: "bust=" +  (new Date()).getTime()
});

// require the unit tests.
require(['qunit', 'api-tests', 'api'], 
	function(QUnit, ApiTests) {
				
				ApiTests.run();
				
				QUnit.load();
				QUnit.start();
		}
);