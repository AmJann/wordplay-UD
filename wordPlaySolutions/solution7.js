const wordsArr = require('../helper')
const words = wordsArr()

// words that both start and end with a Y

for(let i=0; i < words.length; i++){
    let word = words[i]
        if(word.charAt(0) === "Y" && word.charAt(word.length-1)=== "Y"){
            console.log(word)
        }
    
}

//could have also split each word into individual letters 
// and checked if the first and last index were equal to Y 
// without using charAt