const wordsArr = require('../helper.js');
const words = wordsArr();

//longest word that contains no vowels

let noVowelsArr = []
let longestWord;

for( let i = 0; i < words.length; i ++){
    let word = words[i]
    
    if( !word.includes('A') && !word.includes('E') && !word.includes('I') && !word.includes('O') && !word.includes('U') && !word.includes('Y')){
        noVowelsArr.push(word)
    }
}

for( let i = 0; i < noVowelsArr.length; i++){
    if(!longestWord || noVowelsArr[i].length > longestWord.length){
        longestWord = noVowelsArr[i]
    }
}

console.log(longestWord)