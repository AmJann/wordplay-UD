const wordsArr = require("../helper.js");
const words = wordsArr();

/*
Write a function that takes a string word as an argument 
and returns a count of all of the “A”s in that string.

input: string
output: integer/count
edge cases:lower or uppercase letters, empty string, wrong data type

-create a function that takes in a word/string with a variable inside called count to keep track of A count
-set word to uppercase
-check if empty string or wrong data type, if so return a console.log saying needs to be a string with values
-create a loop to check each letter in the word if it is an A
    -if it is an a then count ++
-once the loop is complete return A
*/

function countOfAInWord(word) {
  let count = 0;
  if (typeof word !== "string" || !word) {
    return "word needs to be a string with value";
  }
  let uppercaseWord = word.toUpperCase();
  for (const letter of uppercaseWord) {
    if (letter === "A") {
      count++;
    }
  }
  return count;
}

console.log(countOfAInWord("apple"));
console.log(countOfAInWord(""));
console.log(countOfAInWord(123));
console.log(countOfAInWord("//////"));
console.log(countOfAInWord("banana"));
console.log(countOfAInWord("APPLE"));
