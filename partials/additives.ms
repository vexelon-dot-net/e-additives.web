<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->

<button type="button" class="btn btn-default btn-lg">Compare</button>
<button type="button" class="btn btn-info btn-lg">QR Bundle</button>
<hr>
<div class="table-responsive">
  <table class="table table-condensed table-striped">
    <thead>
        <tr>
            <td><input type="checkbox" data-role="checkall" /></td>
            <td>Code</td>
            <td>Name</td>
        </tr>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <td><input type="checkbox" /></td>
            <td><a href="#additives/{{code}}">{{code}}</a></h2></td>
            <td>{{name}}</h2></td>
        </tr>
        {{/data}}
    </tbody>
  </table>
</div>
