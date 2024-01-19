const wordsArr = require('../helper')
const words = wordsArr()

// words containing an X and a Y and a Z

for(i = 0; i < words.length; i++){
    if(words[i].includes('X') && words[i].includes('Y') && words[i].includes('Z') ){
        console.log(words[i])
    }
}

