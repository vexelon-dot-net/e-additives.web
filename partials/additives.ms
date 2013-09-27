<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->

<button type="button" class="btn btn-default btn-lg">Compare</button>
<button type="button" class="btn btn-info btn-lg">QR Bundle</button>
<hr>
<div class="table-responsive">
  <table class="footable" data-page-navigation=".pagination">
    <thead>
        <tr>
            <th data-sort-ignore="true"><input type="checkbox" data-role="checkall" /></th>
            <th data-toggle="true">Code</th>
            <th data-toggle="true">Name</th>
            <th data-hide="phone,tablet" data-toggle="true">Last update</th>
        </tr>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <td><input type="checkbox" /></td>
            <td><a href="#additives/{{code}}">{{code}}</a></td>
            <td>{{name}}</td>
            <td>{{last_update}}</td>
        </tr>
        {{/data}}
    </tbody>
    <tfoot>
		<tr>
			<td colspan="5">
				<div class="pagination pagination-centered"></div>
			</td>
		</tr>
	</tfoot>
  </table>
</div>
