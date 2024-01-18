function wordsArr(){
    var fs = require('fs')
    var text = fs.readFileSync("./sowpods.txt").toString("utf-8")
    var splitWords = text.split("\n")
    var words = splitWords.map(function(word){
        return word.trim()
    })
    return words
};


module.exports = wordsArr
