const wordsArr = require('../helper')
const words = wordsArr()

// words that both start and end with a Y

for(let i=0; i < words.length; i++){
        if(words[i].charAt(0) === "Y" && words[i].charAt(words[i].length-1)=== "Y"){
            console.log(words[i])
        }
    
}

//could have also split each word into individual letters 
// and checked if the first and last index were equal to Y 
// without using charAt