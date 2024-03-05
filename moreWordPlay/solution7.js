const wordsArr = require("../helper.js");
const words = wordsArr();

//  Let’s assign letters the following points:
//     - W = 12
//     - Z = 15
//     - E = -17
//     - All other letters = 1

// What are all of the words with at least 50 points?

/*
input: string
ouput: array
edgecase: uppercase and lowercase
-create a function at the top with an empty answer array at the top
-create nested loops
-create an if statement to handle point scoring
-in top of outer loop  create a wordScore var equal to 0
-at the bottom of the outer loop/after inner loop create an 
if statment to check if the word is greater than or equal to 50
- if true then push to answer array
-return answer array
*/

function wordsWithPointsFiftyAndOver(words) {
  let answer = [];
  for (const word of words) {
    let wordScore = 0;
    for (const letter of word) {
      if (letter === "W") {
        wordScore += 12;
      } else if (letter === "Z") {
        wordScore += 15;
      } else if (letter === "E") {
        wordScore -= 17;
      } else {
        wordScore += 1;
      }
    }
    if (wordScore >= 50) {
      answer.push(word);
    }
  }
  return answer;
}

console.log(wordsWithPointsFiftyAndOver(words));
