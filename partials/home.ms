
  <!-- Main jumbotron for a primary marketing message or call to action -->
  {{#locale}}
  <p><span class="label label-info pull-left">BETA</span></p>

  <div class="jumbotron hidden-xs hidden-sm">
    <div class="container">
      <p>{{{home.jumbotron}}}</p>
      <p>
        <a href="#!/additives" class="btn btn-primary btn-lg">{{home.explore}} &raquo;</a>
        <a href="#!/faq" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-question-sign"></span> {{home.faq}}
        </a>
      </p>
    </div>
  </div>  
  <!-- bg warn -->
  <div class="hidden-xs">
    <div id="bg-lang-alert" class="alert alert-dismissable alert-info" style="display: none"> 
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      Само малка част от добавките са преведени на български език! С <a class="alert-link" href="http://e-additives.uservoice.com/knowledgebase/articles/264295-bg-%D0%9A%D0%B0%D0%BA-%D0%B4%D0%B0-%D0%B8%D0%B7%D0%BF%D1%80%D0%B0%D1%82%D1%8F-%D0%BA%D0%BE%D1%80%D0%B5%D0%BA%D1%86%D0%B8%D0%B8-%D0%BD%D0%B0-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BA%D0%B8%D1%82%D0%B5">вашата помощ</a> можем да променим това.
    </div>  
  </div>
  <!-- logo -->
  <div class="row home-logo">
    <p class="text-center"><img src="img/logo.svgz" alt="E-additives Logo" class="img-rounded"/></p>
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
      <a href="#!/faq">{{home.faq}}</a>
    </div>
  </div>
  {{/locale}}
