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
                callback(null, result);

        }).fail(function(jqXHR, textStatus, errorThrown) {
            if (callback)
                callback({'code': jqXHR.status, 'status': errorThrown, 'response': jqXHR.responseText}, null);
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
        },
        searchAdditives: function(criteria, callback) {
            this.ajaxGET('/additives/search', null, this.requestHeaders, callback);  
        }
    });

    var api = null;
    
    /**
     * API declarations
     */
    return {
        // available API versions
        Versions: {
            V09: '0.9'  // BETA
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

        getAdditives: function(criteria, callback) {
            api.getAdditives(callback === undefined ? {} : criteria, callback === undefined ? criteria : callback);
        },

        searchAdditives: function(q, criteria, callback) {
            api.getAdditives(q, callback === undefined ? {} : criteria, callback === undefined ? criteria : callback);
        },

        getAdditive: function(code, callback) {

        },

        getCategories: function(callback) {

        },

        getCategory: function(id, callback) {

        }
    };
});

