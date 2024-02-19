function countriesArr() {
  var fs = require("fs");
  var text = fs.readFileSync("./countries.txt").toString("utf-8");
  var splitWords = text.split("\n");
  var countries = splitWords.map(function (country) {
    return country.trim();
  });
  return countries;
}

module.exports = countriesArr;
