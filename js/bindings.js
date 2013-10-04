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
             * Common/Custom
             */
            $(document).on('alert', function(event, message, type) {
                var $alert = $('div[data-role="alert-box"]');

                if (type === 'info') {
                    type = 'alert-info';
                } else {
                    // danger/error
                    type = 'alert-danger';
                }
                $alert.removeClass('alert-success alert-info alert-warning alert-danger').addClass(type);
                $alert.find('p').html(message);
                $alert.show();
            });
            $(document).on('click', 'div[data-role="alert-box"] > button', function() {
                $(this).parent().hide();
            });
            /**
             * Navbar
             */
            $(document).on('click', '#navbar-menu a', null, function() {
                // Issue #17
                // force close expanded menus if menu link has been clicked
                $(this).closest('.dropdown-menu').trigger('click');
            });
            $(document).on('click', 'div[role="pane"] a', function() {
                // Issue #17
                // force close expanded menus when content link has been clicked
               $('.dropdown.open .dropdown-toggle').dropdown('toggle');
            });
            /**
             * Home page
             */
            $(document).on('click', '#btnSearch', function() {
                var query = $('#search').val();
                app.setLocation('#additives/search/' + query);
            });
            /**
             * Additives page
             */
            $(document).on('click', 'input[data-role="additives-checkall"]', function() {
                if ($(this).is(':checked')) {
                    $('input[data-role="additives-item"]').prop("checked", true);
                } else {
                    $('input[data-role="additives-item"]').removeAttr("checked");
                }
            });            
            /**
             * Languages
             */
            $(document).on('click', 'a[data-lang="lang-en"]', function() {
                $.localStorage.set('locale', 'en-us');
                window.location.reload();
            });
            $(document).on('click', 'a[data-lang="lang-bg"]', function() {
                $.localStorage.set('locale', 'bg-bg');
                window.location.reload();
            });
        },

        trigger: function(event, paramsObj) {
            $(document).trigger(event, paramsObj);
        }
    };
});