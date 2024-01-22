const wordsArr = require('../helper')

const words = wordsArr()

//using includes

for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (word.includes("UU")) {
        console.log(word);
    }
}