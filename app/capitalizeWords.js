module.exports = function capitalize_words(string) {
    var stringArray = string.split(" ");
    let capString = stringArray.map(function(x) {
      return x.charAt(0).toUpperCase() + x.substr(1);
    }).join(' ');

    if (capString === "San Francisco" || capString === "Oakland" || capString === "San Jose" || capString === "Berkeley" || capString === "Fremont"|| capString === "Palo Alto" || capString === "Richmond" || capString === "Sunnyvale" || capString === "Concord" || capString === "Vallejo" || capString === "Walnut Creek" || capString === "Mountain View"   ) {
        return "San Francisco-Oakland-Fremont";
    } else if (capString === "San Leandro" || capString === "Redwood City" || capString === "Emeryville" || capString === "Livermore" || capString === "San Rafael"|| capString === "South San Francisco"|| capString === "Burlingame"|| capString === "Cupertino"|| capString === "Antioch"|| capString === "Pleasanton"|| capString === "Los Altos" || capString === "Menlo Park" ) {
        return "San Francisco-Oakland-Fremont";
    } else if(capString === "Mill Valley" || capString === "Daly City" || capString === "Milpitas" || capString === "Pittsburg" || capString === "Newark"|| capString === "Union City"|| capString === "Martinez"|| capString === "San Ramon" || capString === "Dublin" || capString === "Petaluma" || capString === "Pacifica" || capString === "San Carlos") {
        return "San Francisco-Oakland-Fremont";
    } else if (capString ="Los Gatos"|| capString === "Half Moon Bay"|| capString === "Saratoga"|| capString === "Fairfield"|| capString === "Gilroy" || capString === "Lafayette" || capString === "Morgan Hill" || capString === "Benicia" || capString === "Orinda"|| capString === "Sausalito" || capString === "El Cerrito" || capString === "San Bruno"){
      return "San Francisco-Oakland-Fremont";
    } else {
      return capString;
    }
    return capString;
}
