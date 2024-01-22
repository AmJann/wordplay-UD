function wordsArr() {
  var fs = require("fs");
  var text = fs.readFileSync("./sowpods.txt").toString("utf-8");
  var words = text.split("\r\n");
  return words;
}

module.exports = wordsArr;
