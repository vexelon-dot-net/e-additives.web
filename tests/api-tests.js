
"use strict";

define(['api'], function(Api) {
	
	var run = function() {

		Api.initialize('http://localhost:81/ead.server', '1234567890', Api.Versions.V09);
		
		test('Api Instance', function() {
			ok(Api != null);
		});

		asyncTest('/additives', function() {
			Api.getAdditives(function(data, err) {
				ok(data.length > 0);
				start();
			});
		});

	};

	return {run: run}
});
