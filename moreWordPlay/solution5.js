const wordsArr = require("../helper.js");
const words = wordsArr();

/*What is the longest word that can be made from only the letters
 in “RSTLNE”? Not all of those letters need to be used, and letters 
 can be repeated. Make sure your solution can handle ties.*/

function containsRSTLNE(arr) {
  let requiredChars = new Set(["R", "S", "T", "L", "N", "E"]);
  let largest = [];
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
      if (largest.length === 0) {
        largest.push(arr[i]);
      } else if (arr[i].length === largest[0].length) {
        largest.push(arr[i]);
      } else if (arr[i].length > largest[0].length) {
        largest = [];
        largest.push(arr[i]);
      }
    }
  }
  console.log(largest);
}

containsRSTLNE(words);
