const wordsArr = require("../helper");
const words = wordsArr();

// words that have all 5 vowels, in alphabetical order

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      word.indexOf("A") < word.indexOf("E") &&
      word.indexOf("E") < word.indexOf("I") &&
      word.indexOf("I") < word.indexOf("O") &&
      word.indexOf("O") < word.indexOf("U")
    ) {
      console.log(words[i]);
    }
  }
}

// The problem is pretty vague on handling duplicate vowels.
// My solution does find all vowels in alpabetical order but does not account for duplicate vowels.
