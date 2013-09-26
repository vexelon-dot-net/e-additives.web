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