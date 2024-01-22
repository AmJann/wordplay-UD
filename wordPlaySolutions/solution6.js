const wordsArr = require('../helper')
const words = wordsArr()

// words that have a B and an X and are less than 5 letters long

for(let i = 0; i < words.length; i++){
    let word = words[i]
    if(word.includes('B') && word.includes('X') && word.length < 5){
        console.log(word)
    }
}