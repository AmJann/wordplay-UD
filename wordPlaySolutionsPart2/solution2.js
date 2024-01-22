const wordsArr = require("../helper.js");
const words = wordsArr();

// Create and print an array containing all of the words that end in "GHTLY"

let answerArr = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  if (word.endsWith("GHTLY")) {
    answerArr.push(word);
  }
}

console.log(answerArr);
