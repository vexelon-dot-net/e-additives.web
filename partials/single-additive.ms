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
<br>
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
    </div>
</div>