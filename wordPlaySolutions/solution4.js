const wordsArr = require('../helper')
const words = wordsArr()

// words that contain the word CAT and are exactly 5 letters long

for(let i = 0; i < words.length; i++){
    let splitWord = words[i].split('')
    for(let j =0; j < splitWord.length; j++){
        if( splitWord[j] === "C" && splitWord[j+1] === "A" && splitWord[j+2] ==="T" && words[i].length == 5 ){
            console.log(words[i])
        }
    }
}