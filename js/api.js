"use strict";

define(['jquery', 'underscore'], function($, _) {

	var api = function() {
		this.jsonp = 'callback';
		this.serverUrl = null;
		this.apiAuthKey = '';
		this.requestHeaders = {};
	}

	api.prototype.ajax = function(requestType, resource, params, headers, callback) {
		$.ajax({type: requestType,
			jsonp: this.jsonp,
			url: this.serverUrl + resource,
			dataType: this.jsonp ? 'jsonp' : 'json',
			data: params || {},
			headers: headers || {},
			cache: false,
			crossDomain: false,
		}).done(function(result) {
			// notify
			if (callback)
				callback(result, null);

		}).fail(function(jqXHR, textStatus, errorThrown) {
			if (callback)
				callback(null, {'code': jqXHR.status, 'status': errorThrown, 'response': jqXHR.responseText});
		});			
	}
	
	api.prototype.ajaxGET = function(resource, params, headers, callback) {
		this.ajax('GET', resource, params, headers, callback);
	}

	api.prototype.ajaxPOST = function(resource, params, headers, callback) {
		this.ajax('POST', resource, params, headers, callback);
	}

	/**
	 * API 0.9 (BETA)
	 * 
	 */
	var clientAPI_09 = _.extend(api, {});
	clientAPI_09.prototype = _.extend(api.prototype, {
		getAdditives: function(criteria, callback) {
			this.ajaxGET('/additives', null, this.requestHeaders, callback);
		}
	});

	var api = null;
	
	/**
	 * API declarations
	 */
	return {
		// available API versions
		Versions: {
			V09: '0.9'	// BETA
		},

		initialize: function(server, authKey, version) {
			switch(version) {
				case this.Versions.V09:
				default:
					api = new clientAPI_09();
				break;
			}

			api.serverUrl = server;
			api.apiAuthKey = authKey;
			api.requestHeaders = {
				//'User-Agent': 'EAD WEB',
				'X-Authorization': 'EAD-TOKENS apiKey="' + authKey + '"'
			};
		},

		getAdditives: function(cb) {
			api.getAdditives({}, cb);
		},

		searchAdditives: function(cb) {

		},

		getAdditive: function(code, cb) {

		},

		getCategories: function(cb) {

		},

		getCategory: function(id, cb) {

		}
	};
});

