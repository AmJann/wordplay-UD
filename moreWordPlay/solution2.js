//waj
// What are all of the words that have only “E”s for vowels and are at least 15 letters long?
const wordsArr = require("../helper.js");
const words = wordsArr();

// function onlyE(char) {
//   return (
//     !["A", "I", "O", "U"].includes(char.toUpperCase()) &&
//     ["E"].includes(char.toUpperCase())
//   );
// }

function isVowel(char) {
  return ["A", "E", "I", "O", "U"].includes(char.toUpperCase());
}

function onlyEAndFifteenCharacters(arr) {
  for (let i = 0; i < arr.length; i++) {
    let splitString = arr[i].split("");

    if (splitString.length >= 15) {
      let map = new Map();

      for (let j = 0; j < splitString.length; j++) {
        let char = splitString[j];

        if (isVowel(char) && !map.has(char)) {
          map.set(char, 1);
        } else if (isVowel && map.has(char)) {
          map.set(char, map.get(char) + 1);
        }
        if (map.size > 1) {
          break;
        }
      }

      if (map.size === 1 && map.has("E")) {
        console.log(arr[i]);
      }
    }
  }
}

onlyEAndFifteenCharacters(words);

function onlyEAndFifteenCharacters2(arr) {}
