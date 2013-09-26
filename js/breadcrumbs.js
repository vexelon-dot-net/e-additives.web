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

define(['jquery'], function($) {

    function Breadcrumbs() {
        var self = this;

        self.current = [];
    }

    Breadcrumbs.prototype.new = function() {
        this.current = [];
        return this;
    }

    Breadcrumbs.prototype.add = function(name, url) {
        var obj = null;
        switch(name) {
            case 'home':
                obj = { name: 'Home', url: '#home' };
                break;
            case 'additives':
                obj = { name: 'Additives', url: '#additives' };
                break;
            case 'categories':
                obj = { name: 'Categories', url: '#categories' };
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
        this.current[this.current.length - 1].active = true;
        return this.current;
    }

    return Breadcrumbs;
});