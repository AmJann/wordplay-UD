//waj
// What are all of the words that have only “E”s for vowels and are at least 15 letters long?
const wordsArr = require("../helper.js");
const words = wordsArr();

// function onlyE(letter) {
//   return (
//     !["A", "I", "O", "U"].includes(letter.toUpperCase()) &&
//     ["E"].includes(letter.toUpperCase())
//   );
// }

function isVowel(letter) {
  return ["A", "E", "I", "O", "U"].includes(letter.toUpperCase());
}

function onlyEAndFifteenCharacters(words) {
  for (const word of words) {
    let letters = word.split("");
    let wordContainsOnlyEs = true;

    if (letters.length !== 15) {
      continue;
    }

    for (const letter of letters) {
      if (isVowel(letter) && letter !== "E") {
        wordContainsOnlyEs = false;
        break;
      }
    }

    if (wordContainsOnlyEs) {
      console.log(word);
    }
  }
}

onlyEAndFifteenCharacters(words);
