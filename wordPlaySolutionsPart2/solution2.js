const wordsArr = require('../helper.js');
const words = wordsArr();

// Create and print an array containing all of the words that end in "GHTLY"

let answerArr = []

for( let i =0; i < words.length; i++){
   const splitWord = words[i].split('')
    if( splitWord[words[i].length -1] === "Y" && splitWord[words[i].length -2] === "L" && splitWord[words[i].length -3] === "T" && splitWord[words[i].length -4] === "H" && splitWord[words[i].length -5] === "G"  ){
        answerArr.push(words[i])
    }
}

console.log(answerArr)