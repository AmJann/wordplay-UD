const wordsArr = require("../helper.js");
const words = wordsArr();

//waj
// What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

function wordStartingWithProAndEndingWithIng() {
  for (let i = 0; i < words.length; i++) {
    let start = words[12].slice(1, 3);
    console.log(start);
  }
}
