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

function reverse(word) {
  return word.split("").reverse().join("").toUpperCase();
}
//array solution
function arrayAnswer(babyNames, words) {
  const t0 = performance.now();
  for (let i = 0; i < babyNames.length; i++) {
    let reversed = reverse(babyNames[i]);
    for (let j = i + 1; j < words.length; j++) {
      if (reversed === words[j]) {
        console.log(babyNames[i]);
      }
    }
  }
  const t1 = performance.now();
  console.log(`array solution took ${t1 - t0} milliseconds.`);
}

arrayAnswer(babyNames, words);

//set solution

function setAnswer(babyNames, words) {
  const t0 = performance.now();
  let set = new Set(words);

  for (const name of babyNames) {
    let reversed = reverse(name);

    if (set.has(reversed)) {
      console.log(name);
    }
  }
  const t1 = performance.now();
  console.log(`set solution took ${t1 - t0} milliseconds.`);
}

setAnswer(babyNames, words);

//map answer

//loop through and insert words into map
//separate loop through to compare reversed baby name to scrabble word
//if reversed name is equal to scrabble word, console.log baby name
// add in performance.now() to before and after solution
//console.log(t0-t1)

function createMap(arr) {
  let map = {};
  for (const item of arr) {
    if (item) {
      map[item] = true;
    }
  }
  return map;
}
function mapAnswer(babyNames, words) {
  t0 = performance.now();
  let map = createMap(words);
  for (const name of babyNames) {
    let reversed = reverse(name);
    if (map[reversed] !== undefined) {
      console.log(name);
    }
  }
  t1 = performance.now();
  console.log(`It took ${t1 - t0} milliseconds to run map solution`);
  return 5;
}

mapAnswer(babyNames, words);
