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

    var BaseAPI = function() {
        this.useJsonp = false;
        this.serverUrl = null;
        this.apiAuthKey = '';
        this.requestHeaders = {};
    }

    BaseAPI.prototype.ajax = function(requestType, resource, params, headers, cb) {
        var self = this;
        $.ajax({type: requestType,
            url: self.serverUrl + resource,
            dataType: self.useJsonp ? 'jsonp' : 'json',
            //jsonpCallback: 'callback',
            //jsonp: this.jsonp,
            data: params || {},
            headers: headers || {},
            cache: !self.useJsonp,
            crossDomain: false,
        }).done(function(result) {
            if (cb)
                cb(null, result);

        }).fail(function(jqXHR, textStatus, errorThrown) {
            if (cb)
                cb({'code': jqXHR.status, 'status': errorThrown, 'response': jqXHR.responseText}, null);
        });         
    }
    
    BaseAPI.prototype.ajaxGET = function(resource, params, headers, cb) {
        this.ajax('GET', resource, params, headers, cb);
    }

    BaseAPI.prototype.ajaxPOST = function(resource, params, headers, cb) {
        this.ajax('POST', resource, params, headers, cb);
    }

    /**
     * API 0.9 (BETA)
     * 
     */
    var clientAPI_09 = new BaseAPI();
    _.extend(clientAPI_09, {
        getAdditives: function(cr, cb) {
            this.ajaxGET('/additives', cr, this.requestHeaders, cb);
        },
        searchAdditives: function(q, cr, cb) {
            cr['q'] = q;
            this.ajaxGET('/additives/search', cr, this.requestHeaders, cb);  
        },
        getAdditive: function(code, cr, cb) {
            this.ajaxGET('/additives/' + code, cr, this.requestHeaders, cb);
        },
        getCategories: function(cr, cb) {
            this.ajaxGET('/categories', cr, this.requestHeaders, cb);
        },
        getCategory: function(id, cr, cb) {
            this.ajaxGET('/categories/' + id, cr, this.requestHeaders, cb);
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
                    api = clientAPI_09;
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

        searchAdditives: function(query, criteria, callback) {
            api.searchAdditives(query, 
                callback === undefined ? {} : criteria, callback === undefined ? criteria : callback);
        },

        getAdditive: function(code, criteria, callback) {
            api.getAdditive(code, 
                callback === undefined ? {} : criteria, callback === undefined ? criteria : callback);           
        },

        getCategories: function(criteria, callback) {
            api.getCategories(callback === undefined ? {} : criteria, callback === undefined ? criteria : callback);
        },

        getCategory: function(id, criteria, callback) {
            api.getCategory(id, 
                callback === undefined ? {} : criteria, callback === undefined ? criteria : callback);   
        }
    };
});

