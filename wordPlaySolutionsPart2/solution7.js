const wordsArr = require('../helper.js');
const words = wordsArr();

// letters that never appear consecutively in an English word

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W' ,'X', 'Y', 'Z']
const nonConsecutiveLetters =[]
for( let i =0; i < letters.length; i++){
    let isConsecutive = false

    for(let j=0; j < words.length; j++){
        let splitWord = words[j].split('')

        for(let k =0; k < splitWord.length; k++){

            if(splitWord[k] === letters[i] && splitWord[k + 1] === letters[i]){

                isConsecutive = true
                break
            }
        }

        if(isConsecutive){
            break
        }
    }

    if (!isConsecutive) {
        nonConsecutiveLetters.push(letters[i]);
    }
}

console.log(nonConsecutiveLetters)

