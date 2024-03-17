const fs = require("fs");
const fileContent = fs.readFileSync("./NBAFinals/nba_finals.csv", {
  encoding: "utf-8",
});
const lines = fileContent.split("\r\n");
const keys = lines[0].split(",");
const games = lines.slice(1).map((line) => {
  let columns = line.split(",");
  return columns.reduce(
    (prev, curr, i) => ({
      ...prev,
      [keys[i]]: curr,
    }),
    {}
  );
});

module.exports = games;
