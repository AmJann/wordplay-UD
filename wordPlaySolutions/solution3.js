const wordsArr = require("../helper")
const words = wordsArr()

//words containing a Q but not a U

for( let i = 0; i < words.length; i++){
    if(words[i].includes('Q') && !words[i].includes('U') ){
    console.log(words[i])
    }
}