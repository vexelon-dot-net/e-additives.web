<!--Start: Breadcrumbs -->
{{>breadcrumbs}}
<!--End: Breadcrumbs -->
 <div class="table-responsive">
  <table class="footable">
    <thead>
        <th colspan="2">
            {{#data}}
            <h3>E {{code}}</h3>
            {{/data}}
        </th>
    </thead>
    <tbody>
        {{#data}}
        <tr>
            <td data-toggle="true">{{locale.single_additives.name}}</td>
            <td>{{name}}</td>
        </tr>
        <tr>
            <td data-toggle="true">{{locale.single_additives.function}}</td>
            <td>{{function}}</td>
        </tr>
        <tr>
            <td data-toggle="true">{{locale.single_additives.notice}}</td>
            <td>{{notice}}</td>
        </tr>
        <tr>
            <td data-toggle="true">{{locale.single_additives.status}}</td>
            <td>{{status}}</td>
        </tr>
       
       <!-- <tr>
            <td data-toggle="true">{{locale.single_additives.veg}}</td>
            <td>{{veg}}</td>
        </tr> -->

        <tr>
            <td data-toggle="true">{{locale.single_additives.foods}}</td>
            <td>{{foods}}</td>
        </tr>
        <tr>
            <td data-toggle="true">{{locale.single_additives.info}}</td>
            <td>{{info}}</td>
        </tr
        {{/data}}
    </tbody>
  </table>
</div>