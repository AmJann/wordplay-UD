const wordsArr = require("../helper.js");
const words = wordsArr();

// Write a function that takes a string word as the first argument,
//  a string letter as the second argument, and returns a count of how
//   many times letter occurs in word.

/*
input: string word, string letter
output: number(count)
edge cases: empty string, wrong data type, more than one letter input

-create a function with two inputs. One word the other a letter
-check to make sure they are the right data type, th word is not 
an empty string or the letter is just a single letter
-above the loop create a count variable
-inside the function create a loop that loops through each letter of the word 
    -check IF each letter is equal to input letter
    -if equal add 1 to count
-after loop return count
*/

function specifiedLetterCount(word, letter) {
  if (typeof word !== "string" || !word || letter.length !== 1) {
    return "incorrect input";
  }
  let count = 0;

  for (const char of word) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}

console.log(specifiedLetterCount("banana", "a"));
