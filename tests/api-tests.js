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

define(['config', 'api'], function(Config, Api) {
    var run = function() {

        Api.initialize(Config.server, Config.apiKey, Api.Versions.V09);
        
        test('Api Instance', function() {
            notEqual(Api, null);
        });

        asyncTest('/additives', function() {
            Api.getAdditives(function(err, data) {
                equal(err, null);
                notEqual(data, null);
                ok(data.length > 0);
                start();
            });
        });

        asyncTest('/additives/search', function() {
            Api.searchAdditives('Cuma', {}, function(err, data) {
                equal(err, null);
                notEqual(data, null);
                ok(data.length > 0);
                equal(data[0].code, '100');
                equal(data[0].name, 'Curcuma (turmeric)');
                start();
            });
        });        

    };
    return {run: run}
});
