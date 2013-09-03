e-additives.web
===============

The goal of the E-additives project is to implement a web platform and REST server API that will provide detailed information about [food additives](http://en.wikipedia.org/wiki/Food_additive).

The Web UI is a responsive HTML5/Javascript web app implementation that allows users to *Search* and *Browse* the E-additives database.

# Configuration

## Configure Apache

Configure Apache server on local machine for tests. Open your Apache Virtual Hosts configurations, e.g. `/etc/httpd/conf/extra/httpd-vhosts.conf`, and add the following:

    Alias /ead.web /path-to-project/e-additives.web
    <Directory /path-to-project/e-additives.web>
            Options FollowSymLinks MultiViews -Indexes
            AllowOverride All
            Order allow,deny
            Allow from all
    </Directory>
		
If your are under Windows you can also use [XAMPP](http://www.apachefriends.org/en/xampp.html).

