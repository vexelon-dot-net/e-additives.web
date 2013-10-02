<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->

<div class="table-responsive">
  <table class="table table-condensed table-striped">
    <thead>
        <tr>
            <td>{{locale.categories.name}}</td>
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
