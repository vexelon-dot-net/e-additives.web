
  <!-- Main jumbotron for a primary marketing message or call to action -->
  {{#locale}}
  <div class="jumbotron hidden-xs">
    <div class="container">
      <p>{{home.jumbatron}}</p>
      <p>
        <a href="#additives" class="btn btn-primary btn-lg">{{home.explore}} &raquo;</a>
        <a href="#faq" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-question-sign"></span> {{home.faq}}
        </a>
      </p>
    </div>
  </div>  

  <!-- logo -->
  <div class="row home-logo">
    <p class="text-center"><img src="img/logo_small.png" alt="E-additives Logo" class="img-rounded"/></p>
  </div>
  <!-- search -->
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h3 class="text-center">{{home.search_title}}</h3>
      <form class="form-horizontal" role="form">
        
        <div class="input-group input-group-lg">
          <input type="text" class="form-control typeahead" id="search" placeholder="{{home.search_hint}}" />
          <span class="input-group-btn">
            <button id="btnSearch" class="btn btn-primary" type="button"><span class="glyphicon glyphicon-search"></span></button>
          </span>
        </div>
        
      </form>
    </div>
  </div>
  <div class="row" style="margin-top: 4px;">
    <div class="col-md-6 col-md-offset-3 text-center">
      <a href="#faq">{{home.faq}}</a>
    </div>
  </div>
  {{/locale}}
