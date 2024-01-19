const wordsArr = require('../helper.js');
const words = wordsArr();

//shortest word that contains all five vowels

let wordsWithVowelsArr = []
let shortestWord;

for(let i =0; i < words.length; i ++){
    if(words[i].includes('A') && words[i].includes('E') && words[i].includes('I') && words[i].includes('O') && words[i].includes('U')){
        wordsWithVowelsArr.push(words[i])
    }
}


for(let i =0; i < wordsWithVowelsArr.length; i++){
    if(!shortestWord || wordsWithVowelsArr[i].length < shortestWord.length ){
        shortestWord = wordsWithVowelsArr[i]
    }
}

console.log(shortestWord)