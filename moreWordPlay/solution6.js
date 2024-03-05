const wordsArr = require("../helper.js");
const words = wordsArr();

/*What is the longest word that can be made without the letters in 
 “AEIOSHRTN” (in other words, without the most common letters)? Make
  sure your solution can handle ties.*/

/* 
  input: string
  output: array
  edge cases: make sure imnputs are uppercase or lowercase

-create an answer array
  -create a for loop that loop through each word
  - create a variable that a boolean set to true
  -create an inner for loop that loops through each letter in the word
  - create a another function that takes a single etter from the word as an argument
  -function checks if "AEIOSHRTN" contains the character and returns true or false
  -if false set boolean to false and break from inner loop
  -continue if true
  -in outer loop after inner loop create an if statement if boolean is true && words length is larger than answer[0] reset array and push word to answer array
  - if equal length && true push to answer array
  -return answer array outside loops in function
  */

function hasRestrcitedLetter(char) {
  return ["A", "E", "I", "O", "S", "H", "R", "T", "N"].includes(char);
}

function longestWordNotContainingPopularChars(words) {
  let answer = ["U"];
  for (const word of words) {
    let noRestrictedLetters = true;
    for (const letter of word) {
      if (hasRestrcitedLetter(letter)) {
        noRestrictedLetters = false;
      }
    }
    if (noRestrictedLetters && word.length > answer[0].length) {
      answer = [];
      answer.push(word);
    } else if (noRestrictedLetters && word.length === answer[0].length) {
      answer.push(word);
    }
  }
  return answer;
}

console.log(longestWordNotContainingPopularChars(words));
