Handlebars.registerHelper("roundCoord", function (coord) {
    return Math.round(parseFloat(coord) * 10000000) / 10000000;
});
Handlebars.registerHelper('toLowerCase', function (str) {
    return str.toLowerCase();
});

Handlebars.registerHelper('getTeam', function (index) {
    var teams = ['Neutral','Mystic','Valor','Instinct']
    return teams[index];
});

Handlebars.registerHelper('getTeamCss', function (index) {
    var teams = ['unoccupied','mystic','valor','instinct']
    return teams[index];
});

Handlebars.registerHelper('default', function (value, defaultValue) {
    return value || defaultValue;
});

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a == b) // Or === depending on your needs
        return opts.fn(this);
    else
        return opts.inverse(this);
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
