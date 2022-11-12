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
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    //enforceDefine: true,
    paths: {
        vendor: 'vendor',
        plugin: 'vendor/plugins',
        // libs
        jquery: ["vendor/jquery-1.10.1.min"], //"//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min",
        bootstrap: 'vendor/bootstrap.min',
        sammy: 'vendor/sammy-0.7.4.min',
        underscore: 'vendor/underscore-min',
        moment: 'vendor/moment_langs.min',
        mustache: 'vendor/mustache',
        footable: 'vendor/footable',
        // plugins
        typeahead: 'vendor/plugins/typeahead.min',
        ftpaginate: 'vendor/plugins/footable.paginate',
        ftfilter: 'vendor/plugins/footable.filter',
        ftsort: 'vendor/plugins/footable.sort',
        fttemplate: 'vendor/plugins/footable.plugin.template',
        i18n: 'vendor/plugins/i18n'
    },
    shim: {
        'bootstrap': ['jquery', 'typeahead', 'footable', 'ftpaginate', 'ftfilter', 'ftsort', 'fttemplate', 'moment'],
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'moment': {
            exports: 'moment'
        },
        'sammy': ['jquery'],
        'typeahead': ['jquery'],
        'footable': ['jquery'],
        'ftpaginate': ['footable'],
        'ftfilter': ['footable'],
        'ftsort': ['footable'],
        'fttemplate': ['footable'],
    },
    waitSeconds: 10,
    urlArgs: "bust=" + _Globals.buildnumber,
    config: {
        //Set the config for the i18n module ID
        i18n: {
            locale: _Globals.locale
        }
    }    
});
    
require(['sammy', 'config', 'api', 'bindings', 'breadcrumbs', 'mustache', 'i18n!nls/locale', 'bootstrap', 
    'plugin/sammy.mustache', 'i18n', 'plugin/domReady!'], 
    function(Sammy, Config, API, Bindings, Breadcrumbs, Mustache, Locale) {

    /**
     * Custom errors register
     * @return {[type]} [description]
     */
    var errObj = function() {
        var visible = false;
        var msg = null;
        return {
            trigger: function(arg) {
                visible = true;
                msg = arg;
            },
            exists: function(arg) {
                if (typeof arg !== 'undefined')
                    visible = arg;
                return visible;
            },
            message: function() {
                return msg;
            }
        };
    };
    var errNo = new errObj();

    /**
     * Determine locale
     */
    var shortLocale = 'en'; // default
    if (_Globals.locale) {
        shortLocale = _Globals.locale.substring(0, 2).toLowerCase();
        if (shortLocale != 'bg' && shortLocale != 'en') {
            shortLocale = 'en'; // fallback to default
        }
    }
    // set date-time formatting
    moment.lang(shortLocale);

    /**
     * Load navbar & footer
     */
    $.get('partials/navbar.ms', function(data) {
        var html = Mustache.render(data, {locale: Locale});
        $('div[role="navbar"]').html(html);
    });
    $.get('partials/footer.ms', function(data) {
        var html = Mustache.render(data, {locale: Locale});
        $('#footer').html(html);
        $('#build').html('Build: ' + _Globals.buildnumber);
    });    

    var breadcrumbs = new Breadcrumbs();

    /**
     * Init client API
     */
    API.initialize(Config.serverUrl, Config.serverKey);
    if (shortLocale) {
        API.setLocale(shortLocale);
    }

    /**
     * App routes and functionality
     */
    var app = Sammy('div[role="pane"]', function() {
        this.use(Sammy.Mustache, 'ms');      

        // disable Sammy template caching while in 'dev' mode
        if (Config.isDevMode) {
            this.templateCache = function() {};
        }   

        var load_anim = '<p class="text-center"><img src="img/ajax-loader.gif"/></p>';
        var searchTemplateCode = Mustache.compile('<h4><span class="label label-default">{{code}}</span> {{name}}</h4>');
        var searchTemplateName = Mustache.compile('<h4>{{name}} <span class="label label-default">{{code}}</span></h4>');

        // default
        this.get('/', function() {
            this.redirect('#!/home');
        });
        // Main/Search page
        this.get('home', function() {
            var self = this;
            self.swap(load_anim);

            breadcrumbs.clear();

            this.partial('partials/home.ms', {locale: Locale}, function() {
                // display translation warnings only for BG language
                if (shortLocale == 'bg') {
                    $('#bg-lang-alert').show();
                }
                // show news
                // TODO: Refactor this piece of crap
                // 
                if ($.sessionStorage.get('news.enabled') !== false) {
                    var lastRDate = new Date("2013-11-30T00:00:01").getTime();
                    var now = Date.now();
                    if (lastRDate - now > 0) {
                        $('[data-role="site-news"]').show();
                    }
                    $('div[data-role="site-news"]').bind('closed.bs.alert', function () {
                        $('span[data-role="site-news"]').hide();
                        $.sessionStorage.set('news.enabled', false);
                    });
                }
                // prep. search 
                API.getAdditives(function(err, data) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    $('.typeahead').typeahead([
                        {
                            name: 'additives-codes',
                            valueKey: 'code',
                            limit: 7,
                            local: data,
                            template: searchTemplateCode,
                            engine: Mustache,
                        },
                        {
                            name: 'additives-names',
                            valueKey: 'name',
                            limit: 7,
                            local: data,
                            template: searchTemplateName,
                            engine: Mustache,
                        }
                    ]);                     
                }); //eof-API
            }); //eof-this.partial
        });
        // Additives browse pages
        this.get('additives', function(context) {
            this.redirect('#!/additives/category/100');
        });
        this.get('additives/category/:category', function(context) {
            var self = this;
            self.swap(load_anim);

            var catId = this.params['category'];
            var catName = '';

            //TODO validate category

            API.getCategories(function(err, categoriesData) {
                if (err) {
                    console.log(err);
                    return;
                }                                   
                // prep category info
                _.each(categoriesData, function(item) {
                    if (item.category === parseInt(catId)) {
                        item.active = true;
                        catName = item.name;
                        return;
                    }
                });

                API.getAdditives({category: catId}, function(err, data) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    // no results?
                    if (data.length === 0) {
                        errNo.trigger(Locale.categories.msg_notfound);
                        self.redirect('#!/');
                        return;
                    }                    
                    breadcrumbs.clear().add('home').add('additives').add(catName).render(self, context, function() {
                            context.data = formatAdditivesData(data);
                            context.categories = categoriesData;
                            context.locale = Locale;
                            context.partial('partials/additives.ms', function() {
                                $('table').footable();
                            });                     
                    });
                });                  
            });
        });
        // Search additives
        this.get('additives/search/:query', function(context) {
            var self = this;
            self.swap(load_anim);

            API.searchAdditives(this.params['query'], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                breadcrumbs.clear().add('home').add('additives').render(self, context, function() {
                    // no results?
                    if (data.length === 0) {
                        errNo.trigger(Locale.additives.msg_notfound);
                        self.redirect('#additives');                        
                        return;
                    }
                    context.data = formatAdditivesData(data);
                    context.locale = Locale;
                    context.partial('partials/search-additives.ms', function() {
                        $('table').footable();
                    });                        
                });                
            });
        }); 
        // Show single additive
        this.get('additives/:code', function(context) {
            var self = this;
            self.swap(load_anim);

            API.getAdditive(this.params['code'], function(err, data) {
                if (err) {
                    console.log(err);
                    errNo.trigger(Locale.additives.msg_notfound);
                    self.redirect('#!/additives');
                    return;
                }
                API.getCategory(data.category, function(err, categoryData) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    breadcrumbs.clear().add('home').add('additives')
                        .add(categoryData.name, 'additives/category/' + categoryData.category)
                        .add(data.code)
                        .render(self, context, function() {
                            context.data = formatAdditivesData(data);
                            context.locale = Locale;
                            context.partial('partials/single-additive.ms', function() {
                                // comments
                                loadComments('/additives/' + data.code);                                
                            });
                        });
                });
            });
        });
        // // Compare 2 additives
        // this.get('#additives/compare/:first/:second', function() {
        //     var self = this;
        //     self.swap(load_anim);

        //     // fetch first
        //     API.getAdditive(self.params['first'], function(err, dataFirst) {
        //         if (err) {
        //             console.log(err);
        //             return;
        //         }
        //         // fetch second
        //         API.getAdditive(self.params['second'], function(err, dataSecond) {
        //             if (err) {
        //                 console.log(err);
        //                 return;
        //             }                    

        //             self.partial('partials/compare-two.ms', {first: dataFirst, second: dataSecond});
        //         });
        //     });
        // });        
        // Categories page
        this.get('categories', function(context) {
            var self = this;
            self.swap(load_anim);

            API.getCategories(function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                breadcrumbs.clear().add('home').add('categories').render(self, context, function() {
                    context.data = formatCategoriesData(data);
                    context.locale = Locale;
                    context.partial('partials/categories.ms', function() {
                        $('table').footable();
                    });                        
                });                 
            });            
        });
        // Show single cateogry
        this.get('categories/:id', function(context) {
            var self = this;
            self.swap(load_anim);

            API.getCategory(this.params['id'], function(err, data) {
                if (err) {
                    console.log(err);
                    errNo.trigger(Locale.categories.msg_notfound);
                    self.redirect('#categories');
                    return;
                }
                breadcrumbs.clear().add('home').add('categories').add(data.name).render(self, context, function() {
                    context.data = formatCategoriesData(data);
                    context.locale = Locale;
                    context.partial('partials/single-category.ms');                        
                });
            });
        });
        // F.A.Q. page
        this.get('faq', function(context) {
            var self = this;
            self.swap(load_anim);
            breadcrumbs.clear().add('home').add('F.A.Q.').render(self, context, function() {
                var partialName = shortLocale === 'bg' ? 'faq-bg.ms' : 'faq.ms';
                context.locale = Locale;
                context.partial('partials/' + partialName);
            });         
        });
        // Goodies: Apps
        this.get('goodies/apps', function(context) {
            var self = this;
            self.swap(load_anim);
            breadcrumbs.clear().add('home').add('goodies').add('apps').render(self, context, function() {
                context.locale = Locale;
                context.partial('partials/apps.ms');                      
            });            
        });
        // Goodies: Developer API
        this.get('goodies/developers', function(context) {
            var self = this;
            self.swap(load_anim);
            breadcrumbs.clear().add('home').add('goodies').add('developers').render(self, context, function() {
                context.locale = Locale;
                context.partial('partials/developer-api.ms');                      
            });            
        });        
        // Legal: Privacy page
        this.get('legal/privacy', function() {
            var self = this;
            self.swap(load_anim);
            self.partial('partials/privacy.ms');
        });
        // Legal: Terms of use page
        this.get('legal/terms', function() {
            var self = this;
            self.swap(load_anim);
            self.partial('partials/terms.ms');
        });
        // HTTP 404
        // this.notFound = function(verb, path) {
        //     window.location = '404.html';
        // }
        // show/hide error messages        
        this.bind('changed', function() {
            if (errNo.exists()) {
                Bindings.trigger('alert', [errNo.message]);
                errNo.exists(false);
            } else {
                Bindings.trigger('hide-alert');
            }
        });
        
    });
    // start the application
    app.run('#!/');
    app.clearTemplateCache();

    /**
     * Bind app events
     */
    Bindings.bindAll(app);

    /**
     * Others
     */
    function formatAdditivesData(data) {
        function _fmt(additive) {
            additive.last_update = moment(additive.last_update).format('LLL');
            return additive;            
        }

        if (Object.prototype.toString.call(data) == '[object Array]') {
            var result = [];
            _.each(data, function(item) {
                result.push(_fmt(item));
            });
            return result;
        }

        return _fmt(data);
    }
    function formatCategoriesData(data) {
        function _fmt(category) {
            category.last_update = moment(category.last_update).format('LLL');
            return category;            
        }

        if (Object.prototype.toString.call(data) == '[object Array]') {
            var result = [];
            _.each(data, function(item) {
                result.push(_fmt(item));
            });
            return result;
        }

        return _fmt(data);
    }
    function loadComments(uri) {
        if (typeof Config.comments !== 'object' || !Config.comments.enabled) {
            $('#comments').hide();
            return;
        }
        if (typeof uri !== 'string') {
            $('#comments').hide();
            throw "Invalid uri (identifier)!";
        }

        console.log(Config.comments.url + "/#!" + uri);

        if (window.DISQUS) {
            window.DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.category_id = '2676695';
                    this.page.identifier = uri;
                    this.page.url = Config.comments.url + "/#!" + uri;
                    if (shortLocale)
                        this.language = shortLocale;
                }
            });
        } else {
            var script = "var disqus_shortname  = \"" + 'e-additives'  + "\";\n" + 
                // "var disqus_title       = \"" + 'e-additives' + "\";\n" + 
                "var disqus_category_id = \"" + '2676695' + "\";\n" +
                "var disqus_identifier  = \"" + uri + "\";\n" +
                "var disqus_url         = \"" + Config.comments.url + "/#!" + uri + "\";\n";
            
            if (Config.isDevMode) {
                script += "var disqus_developer = 1;\n"
            }
            if (shortLocale) {
                script += "var disqus_config = function () { this.language = '" + shortLocale + "'; };\n"   
            }
            appendScriptTag(script);
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        }   
    }
    function appendScriptTag(script) {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.text = script;
        document.getElementsByTagName('body')[0].appendChild(dsq);
    }
});
