const wordsArr = require('../helper.js');
const words = wordsArr();



//words containing UU

//not using includes

for(let i=0; i< words.length; i++){
    let splitWord = words[i].split("")

    for(let j=0; j < splitWord.length; j++){
        if(splitWord[j] === "U" && splitWord[j +1] === "U"){
            console.log(words[i])
            break
        }
    }
}

