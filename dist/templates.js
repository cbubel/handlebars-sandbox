(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["partials/header"],depth0,{"name":"partials/header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(partials["partials/main"],depth0,{"name":"partials/main","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(partials["partials/footer"],depth0,{"name":"partials/footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['partials/footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container\">\n  <small>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.footer : depth0)) != null ? stack1.text : stack1), depth0))
    + "</small>\n</div>";
},"useData":true});
templates['partials/header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n      </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.header : depth0)) != null ? stack1.title : stack1), depth0))
    + "</a>\n\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.header : depth0)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</nav>";
},"useData":true});
templates['partials/main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"main\" class=\"container\">\n  <h1>Template body</h1>\n\n  <p class=\"lead\">\n    "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.body : stack1), depth0))
    + "\n  </p>\n</div>";
},"useData":true});
})();
