{{#locale}}
<hr class="visible-xs">
<!-- Vissible footer list collapse when screen <= xs -->
<div class="panel-group visible-xs" id="accordion">

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
          {{footer.column_1}}
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse">
      <div class="panel-body">
       <ul class="list-unstyled">
            <li><a href="http://e-additives.uservoice.com/">{{footer.contact_us}}</a></li>
            <li><a href="https://github.com/vexelon-dot-net">{{footer.contribute}}</a></li>
            <li><a href="#">{{footer.blog}}</a></li>
       </ul>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
         {{footer.column_2}}
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse">
      <div class="panel-body">
        <ul class="list-unstyled">
            <li><a href="#goodies/apps">{{footer.apps}}</a></li>
            <li>
              <a href="https://github.com/vexelon-dot-net/e-additives.server/blob/production/docs/API.md">{{footer.api}}</a>
            </li>
         </ul>
      </div>
    </div>
  </div>
  <hr>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
          {{common.language}}
        </a>
      </h4>
    </div>
    <div id="collapseFive" class="panel-collapse collapse">
      <div class="panel-body">
        <ul class="list-unstyled">
          <li><a data-lang="lang-en" href="#">English</a></li>
          <li>|&nbsp;<a data-lang="lang-bg" href="#">Български</a></li>
        </ul>
      </div>
    </div>
  </div>

</div>
<div class="container hidden-xs"><hr></div>
<!-- Vissible footer list when screen is > xs -->
<div class="container hidden-xs col-md-12">
    
    <div class="col-xs-6 col-sm-3">
        <ul class="list-unstyled">
            <li><h4>{{footer.column_1}}</h4></li>
            <li><a href="http://e-additives.uservoice.com/">{{footer.contact_us}}</a></li>
            <li><a href="https://github.com/vexelon-dot-net">{{footer.contribute}}</a></li>
            <li><a href="#">{{footer.blog}}</a></li>
        </ul>
    </div>
    <div class="col-xs-6 col-sm-3 ">
        <ul class="list-unstyled">
            <li><h4>{{footer.column_2}}</h4></li>
            <li><a href="#goodies/apps">{{footer.apps}}</a></li>
            <li>
              <a href="https://github.com/vexelon-dot-net/e-additives.server/blob/production/docs/API.md">{{footer.api}}</a>
            </li>
        </ul>
    </div>
</div>

<div class="container separator2">
  <hr>
</div>

<div class="container">
  <ul class="list-inline hidden-xs language-list-footer">
      <li><a data-lang="lang-en" href="#">English</a></li>
      <li>|&nbsp;<a data-lang="lang-bg" href="#">Български</a></li>
  </ul>
  <p class="rights"><img src="img/icon.svg"/> © 2013 <a href="http://vexelon.net">Vexelon.NET Services</a>. All rights reserved. | <a href="#legal/terms">Terms of Use</a>, <a href="#legal/privacy">Privacy Policy</a>
    <span id="build" class="pull-right"><!--build no.--></span>
  </p>
</div>
{{/locale}}

