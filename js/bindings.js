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
    /**
     * Here we bind all expected web site events.
     * Things like: button press, key press, custom events, etc.
     */
    return {
        bindAll: function(app) {
            /**
             * Navbar
             */
            $(document).on("click", "#navbar-menu a", null, function() {
                // force closing of dropdown menu
                $(this).closest('.dropdown-menu').trigger('click');
            })            
            /**
             * Home page
             */
            $(document).on('click', '#btnSearch', function() {
                var query = $('#search').val();
                app.setLocation('#additives/search/' + query);
            });
            /**
             * Languages
             */
            $(document).on('click', '#lang-en', function() {
                $.localStorage.set('locale', 'en-us');
                window.location.reload();
            });
            $(document).on('click', '#lang-bg', function() {
                $.localStorage.set('locale', 'bg-bg');
                window.location.reload();
            });
        }
    };
});