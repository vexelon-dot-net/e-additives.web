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

define({
    /**
     * en_US default locale
     */ 
    "root": {

        // Changelog/News
        "news": {
            "latest": "You can now add comments under each additive."
        },

        // Common for all pages
        "common": {
            "language": "Language",
            "outdated": "outdated",
            "new": "NEW"
        },

        // Navbar
        "navbar": {
            "home": "Home",
            "explore": "Explore",
            "additives": "Additives",
            "categories": "Categories"
        },

        // Footer
        "footer": {
            "column_1": "Find out more",
            "contact_us": "Contact Us",
            "contribute": "Contribute",
            "blog": "Blog",
            "column_2": "Goodies",
            "apps": "Apps",
            "api": "Developer API"
        },

        // Home page
        "home": {
            "jumbotron" : "Do you know what you eat? No! Well, neither do we. That's why we have created the E-additives platform. \
            It's a place where we want to give you the chance to find, learn, comment and edit infos about food additives.",
            "search_title": "Search food additives",
            "search_hint": "Name or E-number, e.g, 101",
            "explore": "Explore",
            "faq": "F.A.Q."
        },

        // Additives page
        "additives": {
            "msg_notfound": "Additive not found!",
            "name": "Name",
            "code": "Code",
            "last_update": "Last update",
            "enter": "E-number or Name"
        },

        // Categories page
        "categories": {
            "msg_notfound": "Category not found!",
            "name": "Name",
            "amount": "Additives (amt.)",
            "last_update": "Last update"
            
        },
        // Single additives page
        "single_additives": {
            "code": "Code",
            "name": "Name",
            "function": "Function",
            "notice": "Warnings",
            "status": "Status",
            "veg": "Safe for vegetarians",
            "foods": "Foods",
            "info": "Details"
        },

        "goodies": {
            // Apps page
            "apps": {
                "jumbotron": 'Here you can find a list of apps that interact with the E-additives platform. \
                If you create an app that uses our API, make sure you send us a link so we can place it here. :) ',
                "j2me_title": "E-additives Java ME App",
                "j2me_body": "Java Microedition app that provides detailed information about food additives on Java enabled phones."
            },
            // Developers page
            "developers": {
                "jumbotron": '<i><small>Do you even code, Bro\'?</small></i> Because, using the E-additives API, you can \
                (<i><small>hopefully</small></i>) build applications that deliver food additives information \
                or you can integrate that information in your existing app. <br> \
                If you create an app that uses our API, make sure you send us a link. We\'ll be happy to see that this whole \
                API thing works. :-P',

                "documentation": "Documentation",
                "docu_body1": 'The latest production based API documentation is located at \
                <a href="https://github.com/vexelon-dot-net/e-additives.server/blob/production/docs/API.md">GitHub</a>.',
                "docu_body2": '<b>API access:</b> http://e-additiv.es/api',
                "docu_body3": 'Please note that we are still in <i>BETA</i> and the API <u>may</u> change between \
                production versions! Sorry :)',

                "apikeys": "API keys",
                "apikeys_body1": "We do not have an authentication model implemented, yet. Currently, you only need to set an \
                authorization demo key in the header of your HTTP requests as specified in the documentation.",
                "apikeys_body2": "<b>Demo key:</b> c89b0a895987a710db6ee5c86fc7da24d97e55dd"
            }
        }

    },
    "bg-bg": true
});