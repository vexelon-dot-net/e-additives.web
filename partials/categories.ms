<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->
<div class="table-responsive">
  <table class="footable>
    <thead>
        <tr>
            <th>{{locale.categories.name}}</th>
            <th>{{locale.categories.amount}}</th>
            <th>{{locale.categories.last_update}}</th>
        </tr>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <td data-toggle="true"><a href="#categories/{{id}}">{{name}}</a></td>
            <td data-toggle="true"></td>
            <td data-toggle="true">{{last_update}}</td>
        </tr>
        {{/data}}
    </tbody>
  </table>
</div>