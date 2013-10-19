
{{#locale}}
<div class="jumbotron hidden-xs">
    <div class="container">
      <p>{{{goodies.developers.jumbotron}}}</p>
    </div>
</div>  

{{#goodies.developers}}
<div class="row">
    <div class="col-md-6">

		<div class="panel panel-primary">
			<div class="panel-heading">{{documentation}}</div>
			<div class="panel-body">
				<p>{{{docu_body1}}}</p>
				<p>{{{docu_body2}}}</p>
			</div>			
		</div>
	</div>    	
	<div class="col-md-6">
		<div class="panel panel-primary">
			<div class="panel-heading">{{apikeys}}</div>
			<div class="panel-body">
				<p>{{apikeys_body1}}</p>
				<p>{{{apikeys_body2}}}</p>
			</div>			
		</div>    	

    </div>
</div>
{{/goodies.developers}}
{{/locale}}