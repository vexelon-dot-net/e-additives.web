/*
 * e-additives.web
 * Copyright (C) 2013 VEXELON.NET Services
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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