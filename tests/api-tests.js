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
                equal(err, null, 'err');
                notEqual(data, null);
                ok(data.length > 0);
                start();
            });
        });

        asyncTest('/additives/search', function() {
            Api.searchAdditives('Cuma', {}, function(err, data) {
                equal(err, null, 'err');
                equal(data[0].code, '100', "[EN] Code");
                equal(data[0].name, 'Curcuma (turmeric)', "[EN] Name");
                start();
            });
            stop();
            Api.searchAdditives('Cuma', {locale: 'bg'}, function(err, data) {
                equal(err, null, 'err');
                equal(data[0].code, '100', '[BG] Code');
                equal(data[0].name, 'Curcuma (turmeric)', '[BG] Name');
                start();
            });            
        });

        asyncTest('/additives/101', function() {
            Api.getAdditive('101', function(err, data) {
                equal(err, null, 'err');
                equal(data.code, '101', 'code=101');
                ok(data.hasOwnProperty('name'), 'name');
                equal(data.name, 'Riboflavin (Vitamin B2)');
                ok(data.hasOwnProperty('id'), 'id');
                ok(data.hasOwnProperty('last_update'), 'last_update');
                ok(data.hasOwnProperty('veg'), 'veg');
                ok(data.hasOwnProperty('function'), 'function');
                ok(data.hasOwnProperty('foods'), 'foods');
                ok(data.hasOwnProperty('notice'), 'notice');
                ok(data.hasOwnProperty('info'), 'info');
                ok(data.hasOwnProperty('url'), 'url');
                start();
            });
        });

        asyncTest('/categories', function() {
            Api.getCategories(function(err, data) {
                equal(err, null, 'err');
                ok(data.length > 0);
                for (var i = 0; i < data.length; i++) {
                    ok(data[i].hasOwnProperty('id'), i + ' id');
                    ok(data[i].hasOwnProperty('last_update'), i + ' last_update');
                    ok(data[i].hasOwnProperty('name'), i + ' name');
                    ok(data[i].hasOwnProperty('url'), i + ' url');
                }
                start();
            });
        });   

        asyncTest('/category/1', function() {
            Api.getCategory('1', function(err, data) {
                equal(err, null, 'err');
                ok(data.hasOwnProperty('id'), 'id');
                equal(data.id, '1', 'id=1');
                ok(data.hasOwnProperty('name'), 'name');
                equal(data.name, 'colors', 'name=colors');
                ok(data.hasOwnProperty('description'), 'description');
                ok(data.hasOwnProperty('last_update'), 'last_update');
                ok(data.hasOwnProperty('url'), 'url');
                start();
            });
        });

    };
    return {run: run}
});