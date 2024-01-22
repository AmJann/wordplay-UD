const wordsArr = require('../helper.js');
const words = wordsArr();

//shortest word that contains all five vowels

let wordsWithVowelsArr = []
let shortestWord;

for(let i =0; i < words.length; i ++){
    let word = words[i]
    if(word.includes('A') && word.includes('E') && word.includes('I') && word.includes('O') && word.includes('U')){
        wordsWithVowelsArr.push(word)
    }
}


for(let i =0; i < wordsWithVowelsArr.length; i++){
    if(!shortestWord || wordsWithVowelsArr[i].length < shortestWord.length ){
        shortestWord = wordsWithVowelsArr[i]
    }
}

console.log(shortestWord)