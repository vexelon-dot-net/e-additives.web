<!--Start: Breadcrumbs -->
<ol class="breadcrumb">
    {{#breadcrumbs}}
    {{#active}}
        <li class="active">{{name}}</li>
    {{/active}}
    {{^active}}
    <li><a href="{{url}}">{{name}}</a></li>
    {{/active}}
    {{/breadcrumbs}}
</ol>
<!--End: Breadcrumbs -->

<div class="table-responsive">
  <table class="table table-condensed table-striped">
    <thead>
        <tr>
            <td>Name</td>
        </tr>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <td><a href="#categories/{{id}}">{{name}}</a></td>
        </tr>
        {{/data}}
    </tbody>
  </table>
</div>
