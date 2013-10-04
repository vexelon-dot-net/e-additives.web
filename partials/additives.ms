<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->
<div class="table-responsive">
<form role="form">
  <div class="form-group col-sm-4 col-xs-6">
    <label for="code">{{locale.additives.search}}</label>
    <input type="text" id="filter" class="form-control" id="code" placeholder="{{locale.additives.enter}}">
  </div>
</form>
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
            <td><a href="#additives/{{code}}">{{code}}</a></td>
            <td>{{name}}</td>
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