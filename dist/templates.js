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

  return "<div id=\"footer\">\n  "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.footer : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n</div>";
},"useData":true});
templates['partials/header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"header\">\n  "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.header : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n</div>";
},"useData":true});
templates['partials/main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"main\">\n  "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.body : stack1), depth0))
    + "\n</div>";
},"useData":true});
})();
