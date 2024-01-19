const wordsArr = require("../helper")
const words = wordsArr()

//words with no vowel and not even a Y

for( let i = 0; i < words.length; i ++){
    if( !words[i].includes('A') && !words[i].includes('E') && !words[i].includes('I') && !words[i].includes('O') && !words[i].includes('U') && !words[i].includes('Y')){
        console.log(words[i])
    }
}