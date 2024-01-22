const wordsArr = require("../helper.js");
const words = wordsArr();

//What is the longest palindrome?
let palindromeArr = [];
let longestPalindrome;

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let splitWord = word.split("");
  let reverseWord = splitWord.slice().reverse();

  if (splitWord.join() === reverseWord.join()) {
    palindromeArr.push(word);
  }
}
for (let i = 0; i < palindromeArr.length; i++) {
  if (
    !longestPalindrome ||
    palindromeArr[i].length > longestPalindrome.length
  ) {
    longestPalindrome = palindromeArr[i];
  }
}

console.log("Longest Palindrome:", longestPalindrome);
