const wordsArr = require('../helper.js');
const words = wordsArr();

let noVowelsArr = []
let longestWord;

for( let i = 0; i < words.length; i ++){
    if( !words[i].includes('A') && !words[i].includes('E') && !words[i].includes('I') && !words[i].includes('O') && !words[i].includes('U') && !words[i].includes('Y')){
        noVowelsArr.push(words[i])
    }
}

for( let i = 0; i < noVowelsArr.length; i++){
    if(!longestWord || noVowelsArr[i].length > longestWord.length){
        longestWord = noVowelsArr[i]
    }
}

console.log(longestWord)