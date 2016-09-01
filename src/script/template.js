this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["PokemonInfoPopup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"iw-wrap iw-pokestop\">\r\n    <div class=\"iw-status\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <img src=\"images/pokemon/"
    + alias4(((helper = (helper = helpers.PokemonId || (depth0 != null ? depth0.PokemonId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PokemonId","hash":{},"data":data}) : helper)))
    + ".png\" alt=\""
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + " icon\" class=\"iw-icon\">\r\n    <div class=\"iw-header iw-name\">\r\n        <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.Time || (depth0 != null ? depth0.Time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Time","hash":{},"data":data}) : helper)))
    + "</span>\r\n        <span class=\"iw-detail-header\">"
    + alias4(((helper = (helper = helpers.Tyep || (depth0 != null ? depth0.Tyep : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Tyep","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n    <div class=\"iw-content\">\r\n        <div class=\"iw-detail iw-gym-level\" >\r\n            <span class=\"iw-detail-header\">Level</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.Level || (depth0 != null ? depth0.Level : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Level","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n        <div class=\"iw-detail iw-gym-xp\" style=\"display: none\">\r\n            <span class=\"iw-detail-header\">XP</span>\r\n            <span class=\"iw-detail-value\">8994 / 10000</span>\r\n        </div>\r\n\r\n        <hr class=\"iw-gym-hr-general\" style=\"display: none\">\r\n\r\n        <div class=\"iw-detail iw-gym-defender\" style=\"display: none\">\r\n            <span class=\"iw-detail-header\">Defender</span>\r\n            <span class=\"iw-detail-value\">\r\n                <img alt=\"Defender pokemon\" src=\"#\" class=\"iw-gym-defender-icon\">\r\n                <span class=\"iw-gym-defender-name\"></span>\r\n            </span>\r\n        </div>\r\n        <div class=\"iw-detail iw-gym-defender-cp\">\r\n            <span class=\"iw-detail-header\">CP</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.CP || (depth0 != null ? depth0.CP : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CP","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n        <hr class=\"iw-gym-hr-defender\" style=\"display: none\">\r\n\r\n        <div class=\"iw-detail iw-latitude\">\r\n            <span class=\"iw-detail-header\">Latitude</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.Latitude || (depth0 != null ? depth0.Latitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Latitude","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n        <div class=\"iw-detail iw-longitude\">\r\n            <span class=\"iw-detail-header\">Longitude</span>\r\n            <span class=\"iw-detail-value\">"
    + alias4(((helper = (helper = helpers.Longitude || (depth0 != null ? depth0.Longitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Longitude","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});