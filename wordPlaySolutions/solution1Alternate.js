const wordsArr = require('../helper')

const words = wordsArr()

//using includes

for (let i = 0; i < words.length; i++) {

    if (words[i].includes("UU")) {
        console.log(words[i]);
    }
}