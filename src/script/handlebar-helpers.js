Handlebars.registerHelper("roundCoord", function (coord) {
    return Math.round(parseFloat(coord) * 10000000) / 10000000;
});
Handlebars.registerHelper('toLowerCase', function (str) {
    return str.toLowerCase();
});

Handlebars.registerHelper('round', function (str) {
    return Math.round(str);
});
Handlebars.registerHelper('toTime', function (totalSec) {
    return Math.round((totalSec / 60)) + " min " + totalSec % 60 + " sec";
});

Handlebars.registerHelper("friendlyRarityName", function (rarity) {
    switch (rarity) {
        case "VeryRare":
            return "Very Rare"
            break;
        case "VeryCommon":
            return "Very Common";
            break;
        default:
            return rarity;
    }
});
