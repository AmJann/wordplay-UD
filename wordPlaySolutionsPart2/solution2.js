const wordsArr = require("../helper.js");
const words = wordsArr();

// Create and print an array containing all of the words that end in "GHTLY"

let answerArr = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  const splitWord = word.split("");
  if (
    splitWord[word.length - 1] === "Y" &&
    splitWord[word.length - 2] === "L" &&
    splitWord[word.length - 3] === "T" &&
    splitWord[word.length - 4] === "H" &&
    splitWord[word.length - 5] === "G"
  ) {
    answerArr.push(word);
  }
}

console.log(answerArr);
