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

"use strict"; // jshint ;_;

require.config({
    //By default load any module IDs from js
    baseUrl: 'js',
    //enforceDefine: true,
    paths: {
        vendor: 'vendor',
        plugin: 'vendor/plugins',
        // libs
        jquery: ["//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min", "vendor/jquery-1.10.1.min"],
        bootstrap: 'vendor/bootstrap.min',
        sammy: 'vendor/sammy-0.7.4.min',
        underscore: 'vendor/underscore-min',
        moment: 'vendor/moment_langs.min',
        mustache: 'vendor/mustache',
        // plugins
        typeahead: 'vendor/plugins/typeahead.min'
    },
    shim: {
        'bootstrap': ['jquery', 'typeahead'],
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'sammy': ['jquery'],
        'typeahead': ['jquery']
    },
    waitSeconds: 10,
    urlArgs: "bust=" +  (new Date()).getTime() // TODO: use build num
});
    
require(['sammy', 'api', 'config', 'bootstrap', 'plugin/sammy.mustache', 'plugin/domReady!'], function(Sammy, API, Config) {

    API.initialize(Config.serverUrl, Config.serverKey);

    var app = Sammy('div[role="pane"]', function() {
        this.use(Sammy.Mustache, 'ms');

        // TODO: if dev?!
        this.templateCache = function() {};

        // default
        this.get('#/', function() {
            this.redirect('#home');
        });
        // Main/Search page
        this.get('#home', function() {
            var self = this;
            this.partial('partials/home.ms', {}, function() {
                console.log('loaded');
                // single dataset
                $('.typeahead').typeahead({
                    name: 'accounts',
                    local: ['101', '101a', '202']
                });  
            });
        });
        // Additives browse page
        this.get('#additives', function() {
            var self = this;
            API.getAdditives(function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                self.partial('partials/additives.ms', {data: data});
            });            

            //this.partials = {name: 'opa', code: '101', info: 'text info'};
            //this.render('partials/single-additive.ms', {name: 'quirkey', code: '101'}).appendTo($('body'));

            // this.load('partials/single-additive.ms')
            //     .then(function(partial) {
            //         // set local vars
            //         context.partials = {name: 'opa', code: '101', info: 'text info'};
            //         context.name = context.params.name;
            //         context.friend = context.params.friend;
            //         // render the template and pass it through mustache
            //         context.partial('partials/single-additive.ms');

            //         //var rendered = this.mustache(template, {foo: 'test'});
            //         //console.log(rendered);

            // });            

        });
        // Show single additive
        this.get('#additives/:code', function() {
            var self = this;
            API.getAdditive(this.params['code'], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                self.partial('partials/single-additive.ms', data);
            });
        });    
        // Compare 2 additives
        this.get('#additives/compare/:first/:second', function() {
            var self = this;
            // fetch first
            API.getAdditive(self.params['first'], function(err, dataFirst) {
                if (err) {
                    console.log(err);
                    return;
                }
                // fetch second
                API.getAdditive(self.params['second'], function(err, dataSecond) {
                    if (err) {
                        console.log(err);
                        return;
                    }                    

                    self.partial('partials/compare-two.ms', {first: dataFirst, second: dataSecond});
                });
            });
        });        
        // Categories page
        this.get('#categories', function() {
            var self = this;
            API.getCategories(function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                self.partial('partials/categories.ms', {data: data});
            });            
        });
        // Show single cateogry
        this.get('#categories/:id', function() {
            var self = this;
            API.getCategory(this.params['id'], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                self.partial('partials/single-category.ms', data);
            });
        });                
        // F.A.Q. page
        this.get('#help/faq', function() {
            // load some data
            console.log('faq');

        });
        // About page
        this.get('#help/about', function() {
            // load some data
            console.log('about');

        });

        // HTTP 404
        this.notFound = function(verb, path) {
            //window.location = '404.html';
        }           
    });
    // start the application
    app.run('#/');

    app.clearTemplateCache();
});
