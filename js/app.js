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
		// require.js plugins
		propertyParser: '../plugins/propertyParser',
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
	
require(['sammy', 'bootstrap', 'plugin/domReady!'], function(Sammy) {
	var app = Sammy(function() {
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
			window.location = '404.html';
		}		 	
	});
	// start the application
	app.run('#/');
});
