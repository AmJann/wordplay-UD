const getBabyNames = require("../babyNamesHelper.js");
let babyNames = getBabyNames();
const wordsArr = require("../helper.js");
const words = wordsArr();

//slack waj with answer when finished
/* 
[ ] There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards,
     is a valid Scrabble word. Find and print all such names.
[ ] Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary 
    (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete
    this work under each implementation. Why is the time different? */

//reverse each baby name in a loop
//compare it to each word in scrabble words
//console.log each reverse name that matches a word

function arrayAnswer(arr1, arr2) {
  console.log(performance.now());
  for (let i = 0; i < arr1.length; i++) {
    let splitName = arr1[i].split("");
    let reverse = splitName.reverse().join("").toUpperCase();
    for (let j = 0; j < arr2.length; j++) {
      if (reverse === arr2[j]) {
        console.log(arr1[i]);
      }
    }
  }
  console.log(performance.now());
}

arrayAnswer(babyNames, words);
