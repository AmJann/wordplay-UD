const wordsArr = require("../helper")
const words = wordsArr()

//words containing a Q but not a U

for( let i = 0; i < words.length; i++){
    let word = words[i]
    if(word.includes('Q') && !word.includes('U') ){
    console.log(word)
    }
}