<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->

<ul class="nav nav-tabs">
{{#categories}}
    {{#active}}
    <li class="active">
    {{/active}}
    {{^active}}
    <li>
    {{/active}}
        <a href="#!/additives/category/{{id}}">E {{category}}</a>
    </li>
{{/categories}}
</ul>

<br/>
<br/>

<div>
<form role="form" class="form-horizontal">
  <div class="form-group">
    <div class="col-sm-3 col-md-2 col-xs-6">
        <input type="text" id="filter" class="form-control" id="code" placeholder="{{locale.additives.enter}}">
    </div>
  </div>
</form>
</div>

<div class="table-responsive">
  <table class="footable" data-page-navigation=".pagination" data-page-size="25" data-filter="#filter" data-filter-text-only="true">
    <thead>
        <tr>
            <th data-sort-ignore="true"><input data-role="additives-checkall" type="checkbox"/></th>
            <th data-value="true" data-toggle="true">{{locale.additives.code}}</th>
            <th data-value="true" data-toggle="true">{{locale.categories.name}}</th>
            <th data-hide="phone,tablet" data-toggle="true">{{locale.additives.last_update}}</th>
        </tr>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <td><input type="checkbox" data-role="additives-item" /></td>
            <td class="searchitem"><a href="#!/additives/{{code}}">{{code}}</a></td>
            <td class="searchitem">{{name}}</td>
            <td>{{last_update}}</td>
        </tr>
        {{/data}}
    </tbody>
    <tfoot>
		<tr>
			<td colspan="4">
				<div class="pagination pagination-centered"></div>
			</td>
		</tr>
	</tfoot>
  </table>
</div>
