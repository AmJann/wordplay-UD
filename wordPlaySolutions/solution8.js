const wordsArr = require("../helper")
const words = wordsArr()

//words with no vowel and not even a Y

for( let i = 0; i < words.length; i ++){
    let word = words[i]
    if( !word.includes('A') && !word.includes('E') && !word.includes('I') && !word.includes('O') && !word.includes('U') && !word.includes('Y')){
        console.log(word)
    }
}