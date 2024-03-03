const wordsArr = require("../helper.js");
const words = wordsArr();

//waj
// What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

function wordWithPrefixAndSuffix(words, prefix, suffix, wordLength) {
  let answer = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length !== wordLength) {
      continue;
    }
    let start = word.slice(0, prefix.length);
    let end = word.slice(-suffix.length, word.length);

    if (
      start.toUpperCase() === prefix.toUpperCase() &&
      end.toUpperCase() === suffix.toUpperCase()
    ) {
      answer.push(word);
    }
  }
  return answer;
}

console.log(wordWithPrefixAndSuffix(words, "PRO", "ING", 11));
