const wordsArr = require('../helper')
const words = wordsArr()

// words that have a B and an X and are less than 5 letters long

for(let i = 0; i < words.length; i++){
    if(words[i].includes('B') && words[i].includes('X') && words[i].length < 5){
        console.log(words[i])
    }
}