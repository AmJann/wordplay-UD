const wordsArr = require("../helper.js");
const words = wordsArr();

/*
What are all of the words that have only “U”s for vowels?
create vowels arr
create a set and push each vowel to the set from each word 
and push each vowel to an array and at the end compare length of 
set
-Olijujuan-
*/
function isVowel(char) {
  return ["A", "E", "I", "O", "U"].includes(char.toUpperCase());
}

function onlyU(char) {
  return (
    !["A", "E", "I", "O"].includes(char.toUpperCase()) &&
    ["U"].includes(char.toUpperCase())
  );
}

function onlyUForVowel(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let map = new Map();
    let chars = arr[i].split("");

    for (let j = 0; j < chars.length; j++) {
      let char = chars[j];

      if (isVowel(char) && !map.has(char)) {
        map.set(char);
      }
    }
    if (map.size === 1 && map.has("U")) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function onlyUForVowel2(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let chars = arr[i].split("");

    if (chars.some(onlyU)) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
console.log(onlyUForVowel2(words));
