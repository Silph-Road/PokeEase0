this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["PokemonInfoPopup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"iw-wrap iw-pokemon iw-"
    + alias4(((helper = (helper = helpers.Rarity || (depth0 != null ? depth0.Rarity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Rarity","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"iw-status\">#"
    + alias4(((helper = (helper = helpers.PokemonId || (depth0 != null ? depth0.PokemonId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PokemonId","hash":{},"data":data}) : helper)))
    + " - "
    + alias4((helpers.friendlyRarityName || (depth0 && depth0.friendlyRarityName) || alias2).call(alias1,(depth0 != null ? depth0.Rarity : depth0),{"name":"friendlyRarityName","hash":{},"data":data}))
    + " </div>\r\n    <img src=\"images/pokemon/"
    + alias4(((helper = (helper = helpers.PokemonId || (depth0 != null ? depth0.PokemonId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PokemonId","hash":{},"data":data}) : helper)))
    + ".png\" alt=\""
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + " icon\" class=\"iw-icon\">\r\n    <div class=\"iw-header iw-name\">\r\n        <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span>\r\n        <span class=\"iw-detail-header\">"
    + alias4(((helper = (helper = helpers.CatchType || (depth0 != null ? depth0.CatchType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CatchType","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n    <div class=\"iw-content\">\r\n        <div class=\"iw-detail\" >\r\n            <span class=\"iw-detail-header\">Level</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.Level || (depth0 != null ? depth0.Level : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Level","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n        <div class=\"iw-detail\" >\r\n            <span class=\"iw-detail-header\">IV</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.Perfection || (depth0 != null ? depth0.Perfection : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Perfection","hash":{},"data":data}) : helper)))
    + "%</span>\r\n        </div>\r\n\r\n        <div class=\"iw-detail\">\r\n            <span class=\"iw-detail-header\">CP</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.Cp || (depth0 != null ? depth0.Cp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Cp","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.MaxCp || (depth0 != null ? depth0.MaxCp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MaxCp","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n        <hr class=\"iw-gym-hr-defender\" style=\"display: none\">\r\n\r\n        <div class=\"iw-detail iw-latitude\">\r\n            <span class=\"iw-detail-header\">Latitude</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4((helpers.roundCoord || (depth0 && depth0.roundCoord) || alias2).call(alias1,(depth0 != null ? depth0.Latitude : depth0),{"name":"roundCoord","hash":{},"data":data}))
    + "</span>\r\n        </div>\r\n        <div class=\"iw-detail iw-longitude\">\r\n            <span class=\"iw-detail-header\">Longitude</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4((helpers.roundCoord || (depth0 && depth0.roundCoord) || alias2).call(alias1,(depth0 != null ? depth0.Longitude : depth0),{"name":"roundCoord","hash":{},"data":data}))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["app"]["templates"]["SnipePokemonItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div id=\"fountainTextG\"><div id=\"fountainTextG_1\" class=\"fountainTextG\">W</div><div id=\"fountainTextG_2\" class=\"fountainTextG\">a</div><div id=\"fountainTextG_3\" class=\"fountainTextG\">l</div><div id=\"fountainTextG_4\" class=\"fountainTextG\">k</div><div id=\"fountainTextG_5\" class=\"fountainTextG\">i</div><div id=\"fountainTextG_6\" class=\"fountainTextG\">n</div><div id=\"fountainTextG_7\" class=\"fountainTextG\">g</div></div> \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"pokemon "
    + alias4(((helper = (helper = helpers.ClassName || (depth0 != null ? depth0.ClassName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ClassName","hash":{},"data":data}) : helper)))
    + "\" data-pokemon-unique-id=\""
    + alias4(((helper = (helper = helpers.UniqueId || (depth0 != null ? depth0.UniqueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UniqueId","hash":{},"data":data}) : helper)))
    + "\">\r\n    <a class=\"delete \" data-uniqueId=\""
    + alias4(((helper = (helper = helpers.UniqueId || (depth0 != null ? depth0.UniqueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UniqueId","hash":{},"data":data}) : helper)))
    + "\" title=\"Remove this Pokemon\"></a>\r\n    <h1 class=\"name\">"
    + alias4(((helper = (helper = helpers.PokemonName || (depth0 != null ? depth0.PokemonName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PokemonName","hash":{},"data":data}) : helper)))
    + "</h1>\r\n    <div class=\"image-container\">\r\n        <img src=\"images/pokemon/"
    + alias4(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Id","hash":{},"data":data}) : helper)))
    + ".png\" alt=\""
    + alias4(((helper = (helper = helpers.PokemonName || (depth0 != null ? depth0.PokemonName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PokemonName","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.PokemonName || (depth0 != null ? depth0.PokemonName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PokemonName","hash":{},"data":data}) : helper)))
    + "\" />\r\n    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.IsCatching : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <h3 class=\"distance\">"
    + alias4((helpers.round || (depth0 && depth0.round) || alias2).call(alias1,(depth0 != null ? depth0.Distance : depth0),{"name":"round","hash":{},"data":data}))
    + "m</h3>\r\n    <h3 class=\"timer\">"
    + alias4((helpers.round || (depth0 && depth0.round) || alias2).call(alias1,(depth0 != null ? depth0.Estimated : depth0),{"name":"round","hash":{},"data":data}))
    + "/"
    + alias4(((helper = (helper = helpers.Expired || (depth0 != null ? depth0.Expired : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Expired","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <a class=\"snipe-him\" data-uniqueId=\""
    + alias4(((helper = (helper = helpers.UniqueId || (depth0 != null ? depth0.UniqueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UniqueId","hash":{},"data":data}) : helper)))
    + "\" title=\"Snipe this Pokemon\"></a>\r\n</div>";
},"useData":true});