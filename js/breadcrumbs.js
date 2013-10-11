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

define(['jquery', 'i18n!nls/locale'], function($, locale) {

    function Breadcrumbs() {
        var self = this;

        self.current = [];
    }

    Breadcrumbs.prototype.clear = function() {
        this.current = [];
        return this;
    }

    Breadcrumbs.prototype.add = function(name, url) {
        var obj = null;
        switch(name) {
            case 'home':
                obj = { name: locale.navbar.home, url: 'home' };
                break;
            case 'additives':
                obj = { name: locale.navbar.additives, url: 'additives' };
                break;
            case 'categories':
                obj = { name: locale.navbar.categories, url: 'categories' };
                break;
            default:
                 obj = { name: name, url: url };
                 break;  
        }
        if (obj)
            this.current.push(obj);

        return this;
    }

    Breadcrumbs.prototype.get = function() {
        var self = this;
        self.current[self.current.length - 1].active = true;
        return self;        
    }

    Breadcrumbs.prototype.render = function(sammy, ctx, callback) {
        var self = this.get();

        sammy.load('partials/breadcrumbs.ms').then(function(partial) {
            ctx.partials = {breadcrumbs: partial};
            ctx.breadcrumbs = self.current;
            callback();                  
        });    
    }

    return Breadcrumbs;
});