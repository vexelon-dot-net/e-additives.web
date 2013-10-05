<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->
<div>
<form role="form" class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-1 cold-md-1 col-xs-3 control-label" for="code">{{locale.additives.search}}</label>
    <div class="col-sm-4 col-md-3 col-xs-6">
        <input type="text" id="filter" class="form-control" id="code" placeholder="{{locale.additives.enter}}">
    </div>
  </div>
</form>
</div>
<div class="table-responsive">
  <table class="footable" data-page-navigation=".pagination" data-page-size="25" data-filter="#filter">
    <thead>
        <tr>
            <th data-sort-ignore="true"><input data-role="additives-checkall" type="checkbox"/></th>
            <th data-toggle="true">{{locale.additives.code}}</th>
            <th data-toggle="true">{{locale.categories.name}}</th>
            <th data-hide="phone,tablet" data-toggle="true">{{locale.additives.last_update}}</th>
        </tr>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <td><input type="checkbox" data-role="additives-item" /></td>
            <td class="searchitem"><a href="#additives/{{code}}">{{code}}</a></td>
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