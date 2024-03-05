const wordsArr = require("../helper.js");
const words = wordsArr();
// let words = ["interactive", "elephant", "interesting", "cat", "interplanetary"];

/*
Write a function that takes a string prefix as an argument
and returns an array of all of the words that start with that 
prefix (the prefix has to be at the beginning of the word).
*/

// input: string
//output: array of words with prefix
// edge cases: must be string type,input is not undefined and to uppercase

//create a function with a name that is not too long but understndable for it's purpose
//create empty answer array
// create a loop inside loop create a variable that slices each word according to prefix.length
//check if each sliced word is equal to the input
//if equal push to answer array
//return answer array

function wordHasPrefix(prefix) {
  let answer = [];
  for (const word of words) {
    let slicedWord = word.slice(0, prefix.length).toUpperCase();
    if (slicedWord === prefix.toUpperCase()) {
      answer.push(word);
    }
  }
  return answer;
}

console.log(wordHasPrefix("common"));
