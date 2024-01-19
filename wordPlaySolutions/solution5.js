const wordsArr = require('../helper')
const words = wordsArr()

// words that have no E or A and are at least 15 letters long

for( let i = 0; i < words.length; i ++){
    if(!words[i].includes("E") && !words[i].includes("A") && words[i].length >= 15){
        console.log(words[i])
    }
}