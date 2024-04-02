// Write a function that takes two arguments, a list of prohibited strings and a username, and returns a boolean of whether or not the username contains any of the prohibited strings.

// Some important details:

// - The list of prohibited words will provide words in some casing, and we want to be case-insensitive in our checks. For example, if “darn” is a prohibited word, “darn”, “DARN” and “DaRn” are all prohibited.
// - Sometimes people like to make usernames that substitute numbers for letters, to try to get around a prohibited word list. We also want to make those substitutions prohibited. The specific letter substitutions we need to check are:
//     - A becomes 4
//     - E becomes 3
//     - I becomes 1
//     - O becomes 0
//     - For example, if “darn” is a prohibited word, “d4rn” is also a prohibited word. If “darn” and “heck” are prohibited words, the username “D4RN_y0u_T0_h3ck” contains prohibited words.
//write tests after**

/* 
input: list of prohibited strings and username (array of strings, string)
output: boolean
edge cases: input must be string

creating a function that takes an array of arguments and a username string
create a variable that is a boolean to check if username includes prohibited words
create an array of test prohibited words
create a map that includes prohibited number/letter combos
loop through username to check for numbers and if there's a prohibited number replace with the letter by making index of number equal to letter
loop though prohibited words array and use .includes to see if the username includes each prohibited word
stop loop and return false if username includes prohibited word
else after loop return boolean variable

*/
let prohibitedWords = ["darn", "dang", "cat", "heck"];

function checkForProhibitedWords(words, username) {
  let hasProhibitedWords = false;
  const letterNumber = { 4: "A", 3: "E", 1: "I", 0: "O" };
  for (let i = 0; i < username.length; i++) {
    if (username[i] in letterNumber) {
      let newLetter = letterNumber[username[i]];
      let usernameArr = username.split("");
      usernameArr.splice(i, 1, newLetter);
      username = usernameArr.join("");
    }

    for (const word of words) {
      if (username.toUpperCase().includes(word.toUpperCase())) {
        hasProhibitedWords = true;
        return hasProhibitedWords;
      }
    }
  }
  return hasProhibitedWords;
}

console.log(checkForProhibitedWords(prohibitedWords, "catch"));
console.log(checkForProhibitedWords(prohibitedWords, "c4tch"));
console.log(checkForProhibitedWords(prohibitedWords, "D4RN_y0u_T0_h3ck"));
console.log(checkForProhibitedWords(prohibitedWords, "amber"));

// console.log(parseInt("A"));
