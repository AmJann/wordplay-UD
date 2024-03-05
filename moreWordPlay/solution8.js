const wordsArr = require("../helper.js");
const words = wordsArr();

/*
Write a function that takes a string substring as an argument
 and returns an array of all of the words that contain that 
 substring (the substring can appear anywhere in the word).
*/

//input: string
//output: array of words that include input string
//edge cases: undefined values, wrong datatypes, uppercase vs lowercase
//create function that takes substring
//create empty answer arr
//loop through each word
//check if each word includes substring (set to uppecase) using includes
//push words that include substring to array
//return array

function wordIncludesSubstring(substring) {
  let answer = [];
  if (typeof substring !== "string" || !substring) {
    return "must be in string format and contain only alphabetical characters";
  }

  for (const word of words) {
    if (word.includes(substring.toUpperCase())) {
      answer.push(word);
    }
  }

  return answer;
}

console.log(wordIncludesSubstring(""));
