      {{#locale}}
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#/"><img src="img/icon.png"/></a>
        </div>
        <div id="navbar-menu" class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#/">{{navbar.home}}</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{navbar.explore}} <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#additives">{{navbar.additives}}</a></li>
                <li><a href="#categories">{{navbar.categories}}</a></li>
              </ul>
            </li>
          </ul>
          <!-- languages -->
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{common.language}} <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a id="lang-en" href="#">English</a></li>
                <li><a id="lang-bg" href="#">Български</a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.navbar-collapse -->
      </div>
      {{/locale}}