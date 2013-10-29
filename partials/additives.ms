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

<!-- form role="form" class="form-horizontal">
  <div class="form-group">
    <div class="col-xs-6 col-sm-4 col-md-4">
        <input type="text" id="filter" class="form-control" id="code" placeholder="{{locale.additives.enter}}">
    </div>
  </div>
</form> -->

<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-4 input-group">
        <input type="text" id="filter" class="form-control" placeholder="{{locale.additives.enter}}">
        <span class="input-group-addon glyphicon glyphicon-search"></span>
    </div>
</div>
<br>
<div class="table-responsive">
  <table class="footable" data-page-navigation=".pagination" data-page-size="25" data-filter="#filter">
    <thead>
        <tr>
            <!-- <th data-sort-ignore="true"><input data-role="additives-checkall" type="checkbox"/></th> -->
            <th data-toggle="true">{{locale.additives.code}}</th>
            <th data-toggle="true">{{locale.categories.name}}</th>
            <th data-hide="phone,tablet" data-toggle="true">{{locale.additives.last_update}}</th>
        </tr>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <!-- <td><input type="checkbox" data-role="additives-item" /></td> -->
            <td data-filter="true" class="searchitem"><a href="#!/additives/{{code}}">{{code}}</a></td>
            <td data-filter="true" class="searchitem">{{name}}</td>
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
