{{#locale}}
<div class="container">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#/"><img src="img/icon.svg"/></a>
  </div>
  <div id="navbar-menu" class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav">
      <li><a href="#!/">{{navbar.home}}</a></li>
<!--       <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{navbar.explore}} <b class="caret"></b></a>
        <ul class="dropdown-menu">
          <li><a href="#!/additives">{{navbar.additives}}</a></li>
          <li><a href="#!/categories">{{navbar.categories}}</a></li>
        </ul>
      </li> -->
      <li><a href="#!/additives">{{navbar.additives}}</a></li>
      <li><a href="#!/categories">{{navbar.categories}}</a></li>
    </ul>
    <!-- languages -->
    <ul class="nav navbar-nav navbar-right">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">&nbsp;<img src="img/globe_26x26.png"/> <b class="caret"></b></a>
        <ul class="dropdown-menu">
          <li><a data-lang="lang-en" href="#">English</a></li>
          <li><a data-lang="lang-bg" href="#">Български</a></li>
        </ul>
      </li>
    </ul>
  </div><!--/.navbar-collapse -->
</div>
{{/locale}}