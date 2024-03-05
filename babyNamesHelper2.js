function getBabyNames1880() {
  const fs = require("fs");
  const words = fs.readFileSync("./babyNames1880.txt").toString("utf-8");
  const splitWords = words.split("\n");
  let babyNames = splitWords.map(function (name) {
    return name.trim();
  });
  return babyNames;
}

module.exports = getBabyNames1880;
