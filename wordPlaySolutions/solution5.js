const wordsArr = require('../helper')
const words = wordsArr()

// words that have no E or A and are at least 15 letters long

for( let i = 0; i < words.length; i ++){
    let word = words[i]
    if(!word.includes("E") && !word.includes("A") && word.length >= 15){
        console.log(words[i])
    }
}