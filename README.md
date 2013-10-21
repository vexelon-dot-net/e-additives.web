e-additives.web
===============
![alt text](https://raw.github.com/vexelon-dot-net/e-additives.web/master/img/app_j2me.png "E-additives Logo")

The goal of the E-additives project is to implement a web platform that will provide detailed information about [food additives](http://en.wikipedia.org/wiki/Food_additive).

The Web UI is a responsive HTML5/Javascript single-page web app that allows users to *Search* and *Browse* the E-additives database.

# Development

## Project structure

`build/` - A place where distributable project contents will be generated. This folder **must** be empty!

`css/` - CSS styles files. 

`fonts/` - Fonts required by the project.

`img/` - All images go here.

`js/` - Contains all the Javascript code and libs.
  * `nls/` - Contains web app locales.
  * `vendor/` - Javascript libraries used throught the project.
    - `plugins` - Plugins for vendor libraries.

`partials/` - Mustache HTML templates.

`tests`/ - QUnit based tests.

## Build

Run the `build.sh` script to build the project. The ready to deploy files will be located in the `build` folder.

To clean the `build` folder run `build.sh clean`. 

## Configuration

### Configure App

Create a copy of `config-empty.js` to `config.js` in the `js/` subfolder. Set the server url and API key properties.

### Configure test Apache server

Configure Apache server on local machine for tests. Open your Apache Virtual Hosts configurations, e.g. `/etc/httpd/conf/extra/httpd-vhosts.conf`, and add the following:

    Alias /ead.web /path-to-project/e-additives.web
    <Directory /path-to-project/e-additives.web>
            Options FollowSymLinks MultiViews -Indexes
            AllowOverride All
            Order allow,deny
            Allow from all
    </Directory>
    
If your are under Windows you can also use [XAMPP](http://www.apachefriends.org/en/xampp.html).

# Open Source Libraries
The following open source libraries are used:

  * [jQuery](http://jquery.com/) - The Write Less, Do More, JavaScript Library.
  * [Bootstrap](http://twitter.github.com/bootstrap/) - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
  * [Sammy.js](http://sammyjs.org/) - A small web framework. 
  * [Mustache](http://mustache.github.io/) - Logic-less templates.
  * [Require.js](http://requirejs.org/) - RequireJS is a JavaScript file and module loader.
  * [Underscore.js](http://underscorejs.org/) - utility-belt library for JavaScript.
  * [FooTable](https://github.com/bradvin/FooTable) - jQuery plugin to make HTML tables responsive.
  * [jQuery Storage API](https://github.com/julien-maurel/jQuery-Storage-API) - jQuery Storage API is a plugin that simplify access to storages.
  * [Moment.js](http://momentjs.com/) - A 5.5kb javascript date library for parsing, validating, manipulating, and formatting dates.
  * [Modernizr](http://modernizr.com/) - Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user's browser.

# License

Under [AGPL](LICENSE) license.
