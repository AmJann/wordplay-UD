const wordsArr = require("../helper");
const words = wordsArr();

// words that have all 5 vowels, in any order

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    console.log(words[i]);
  }
}
