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
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
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
        // require.js plugins
        propertyParser: 'vendor/plugins/propertyParser',
    },
    shim: {
        'bootstrap': ['jquery', 'sammy'],
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'sammy': ['jquery']
    },
    waitSeconds: 10,
    urlArgs: "bust=" +  (new Date()).getTime() // TODO: use build num
});
    
require(['sammy', 'bootstrap', 'plugin/sammy.mustache', 'plugin/domReady!'], function(Sammy) {
    var app = Sammy(function() {
        this.use(Sammy.Mustache);
        var template = "<h1>Hello {{foo}}</h1>";

        // default
        this.get('#/', function() {
            this.redirect('#home');
        });
        // Main/Search page
        this.get('#home', function() {
            // load some data
            console.log('home');

        });
        // Additives browse page
        this.get('#additives', function() {
            // load some data
            console.log('additives');

            var rendered = this.mustache(template, {foo: 'test'});
            console.log(rendered);
            //$('body').append(rendered);
            //context.$element().append(rendered);

        });
        // Additives browse page
        this.get('#additives/:code', function() {
            // load some data
            console.log(':code');

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
});
