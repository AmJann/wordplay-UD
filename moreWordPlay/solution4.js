const wordsArr = require("../helper.js");
const words = wordsArr();

// What are all of the words that can be made from only the letters in
// “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.

/*
create a set containing R,S,T,L,N,E
loop through and get each word ,then loop through each word to check each letter is in the set
i can use an if else statment, if !set.has(char) then break otherwise continue.
use a boolean to keep track of if the word is a match
use that boolean in the bottom outer loop
*/

function includesChars(char) {
  return ["R", "S", "T", "L", "N", "E"].includes(char.toUpperCase());
}

function containsRSTLNE(arr) {
  let requiredChars = new Set(["R", "S", "T", "L", "N", "E"]);
  for (let i = 0; i < arr.length; i++) {
    let splitString = arr[i].split("");
    let match = true;

    for (let j = 0; j < splitString.length; j++) {
      if (!requiredChars.has(splitString[j])) {
        match = false;
        break;
      }
    }
    if (match) {
      console.log(arr[i]);
    }
  }
}

containsRSTLNE(words);
// console.log("snow".split(""));
