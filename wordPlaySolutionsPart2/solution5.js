const { count } = require('console');
const wordsArr = require('../helper.js');
const words = wordsArr();

//Which of the letters Q, X, and Z is the least common
let countQ =0
let countX =0
let countZ =0
let least;
for( let i =0; i < words.length; i ++){
    let splitWord = words[i].split('')
    
    for(let j =0; j< splitWord.length; j++){
        if(splitWord[j] === 'Q'){
            countQ++
        }
        else if(splitWord[j] === 'X'){
            ++countX
        }
        else if(splitWord[j] === 'Z'){
            ++countZ
        }
    }
}

if(countQ < countZ){
    if(countQ < countX){
        least = 'Q'
        console.log(least,"count:", countQ)
    }else{
        least = 'X'
        console.log(least,"count:", countX)
    }
}
else if(countZ < countQ){
    if(countZ < countX){
        least = 'Z'
        console.log(least,"count:", countZ)
    }else{
        least = 'X'
        console.log(least,"count:", countX)
    }
}


