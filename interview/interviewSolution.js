const wordsArr = require("../helper.js");
let words = wordsArr();

//What are all of the words that start with a Q, end with a Z,
// and are less than or equal to 6 letters long?

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   if (word.startsWith("Q") && word.endsWith("Z") && word.length <= 6) {
//     console.log(word);
//   }
// }

//Create and print an array containing
//all of the words that have a U but no other vowel.

// let arr = [];

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   if (
//     word.includes("U") &&
//     !word.includes("A") &&
//     !word.includes("E") &&
//     !word.includes("I") &&
//     !word.includes("O")
//   ) {
//     arr.push(word);
//   } else {
//     continue;
//   }
// }

// console.log(arr);

//Create and print an array containing all of the
//words that have only one kind of vowel in them.

let arr = [];

for (let i = 0; i < words.length; i++) {
  let a = 0;
  let e = 0;
  let I = 0;
  let o = 0;
  let u = 0;
  let word = words[i];
  let splitWord = word.split("");
  for (let j = 0; j < splitWord.length; j++) {
    // console.log(j);
    // console.log(splitWord[j]);
    if (splitWord[j] === "A") {
      a++;
    }
    if (splitWord[j] === "E") {
      e++;
    }
    if (splitWord[j] === "I") {
      I++;
    }
    if (splitWord[j] === "O") {
      o++;
    }
    if (splitWord[j] === "U") {
      u++;
    }

    let vowels = [a, e, I, o, u];

    // console.log(splitWord);

    // console.log(vowels);
    let vowelCounter = 0;
    for (let k = 0; k < vowels.length; k++) {
      //   console.log("vowels k", vowels[k]);
      if (vowels[k] > 0) {
        vowelCounter++;
      }
    }
    // console.log("vowel counter", vowelCounter);
    if (vowelCounter === 1) {
      arr.push(word);
    }
  }
}
console.log(arr);
