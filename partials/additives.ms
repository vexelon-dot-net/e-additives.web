<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->
<div class="table-responsive">
  <table class="footable" data-page-navigation=".pagination" data-page-size="25" data-filter="#filter">
    <thead>
        <tr>
            <th colspan="4">{{locale.additives.search}} : <input id="filter" type="text"></th>
        </tr>
        <tr>
            <th data-sort-ignore="true"><input id="check_all_none" type="checkbox"/></th>
            <th data-toggle="true">{{locale.additives.code}}</th>
            <th data-toggle="true">{{locale.categories.name}}</th>
            <th data-hide="phone,tablet" data-toggle="true">{{locale.additives.last_update}}</th>
        </tr>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <td><input class="others" type="checkbox" data-role="checkall" /></td>
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
