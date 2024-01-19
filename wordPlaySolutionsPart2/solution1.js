const wordsArr = require('../helper.js');
const words = wordsArr();


//How many words contain the substring "TYPE”?

let counter = 0

for(let i=0; i < words.length; i++){
    if(words[i].includes('TYPE')){
        ++counter
    }
}
console.log(counter)